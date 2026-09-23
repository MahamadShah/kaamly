from django.contrib import admin
from .models import Application, Job


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ("title", "business", "location", "job_type", "status", "created_at")
    list_filter = ("status", "job_type")
    search_fields = ("title", "location", "business__username")


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ("job", "worker", "status", "applied_at")
    list_filter = ("status",)
    search_fields = ("job__title", "worker__username")