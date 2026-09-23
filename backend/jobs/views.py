from rest_framework import viewsets
from rest_framework.permissions import (
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from rest_framework.exceptions import PermissionDenied

from .models import Job, Application
from .serializers import JobSerializer, ApplicationSerializer


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.select_related("business").all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        if self.request.user.role != "business":
            raise PermissionDenied(
                "Only businesses can create jobs."
            )

        serializer.save(business=self.request.user)

    def perform_update(self, serializer):
        job = self.get_object()

        if job.business != self.request.user:
            raise PermissionDenied(
                "You can only edit your own jobs."
            )

        serializer.save()

    def perform_destroy(self, instance):
        if instance.business != self.request.user:
            raise PermissionDenied(
                "You can only delete your own jobs."
            )

        instance.delete()


class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.select_related(
        "job",
        "worker",
    ).all()

    serializer_class = ApplicationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role == "worker":
            return Application.objects.filter(
                worker=user
            ).select_related("job", "worker")

        if user.role == "business":
            return Application.objects.filter(
                job__business=user
            ).select_related("job", "worker")

        if user.role == "admin":
            return Application.objects.all().select_related(
                "job",
                "worker",
            )

        return Application.objects.none()

    def perform_create(self, serializer):
        if self.request.user.role != "worker":
            raise PermissionDenied(
                "Only workers can apply for jobs."
            )

        serializer.save(worker=self.request.user)

    def perform_update(self, serializer):
        application = self.get_object()

        if self.request.user.role == "business":
            if application.job.business != self.request.user:
                raise PermissionDenied(
                    "You can only manage applications for your jobs."
                )

        elif self.request.user.role == "worker":
            raise PermissionDenied(
                "Workers cannot change application status."
            )

        serializer.save()