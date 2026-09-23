from django.urls import include, path
from .views import health_check

urlpatterns = [
    path("health/", health_check, name="health-check"),

    path("auth/", include("accounts.urls")),
    path("", include("jobs.urls")),
]