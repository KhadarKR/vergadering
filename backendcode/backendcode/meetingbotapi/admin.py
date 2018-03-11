from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    pass

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    pass

@admin.register(Meeting)
class MeetingAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    pass

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    pass

