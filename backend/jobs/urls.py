from rest_framework.routers import DefaultRouter

from .views import JobViewSet, ApplicationViewSet


router = DefaultRouter()

router.register(
    "jobs",
    JobViewSet,
    basename="jobs"
)

router.register(
    "applications",
    ApplicationViewSet,
    basename="applications"
)

urlpatterns = router.urls