from rest_framework import serializers

from .models import Job, Application


class JobSerializer(serializers.ModelSerializer):
    business_name = serializers.CharField(
        source="business.username",
        read_only=True
    )

    class Meta:
        model = Job
        fields = [
            "id",
            "business",
            "business_name",
            "title",
            "description",
            "location",
            "job_type",
            "salary_min",
            "salary_max",
            "status",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "business",
            "created_at",
            "updated_at",
        ]


class ApplicationSerializer(serializers.ModelSerializer):
    worker_name = serializers.CharField(
        source="worker.username",
        read_only=True
    )

    job_title = serializers.CharField(
        source="job.title",
        read_only=True
    )

    class Meta:
        model = Application

        fields = [
            "id",
            "job",
            "job_title",
            "worker",
            "worker_name",
            "cover_letter",
            "status",
            "applied_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "worker",
            "status",
            "applied_at",
            "updated_at",
        ]

    def validate(self, attrs):
        request = self.context["request"]

        if request.user.role == "worker":
            job = attrs.get("job")

            if job and job.status != Job.Status.OPEN:
                raise serializers.ValidationError(
                    "This job is no longer accepting applications."
                )

        return attrs