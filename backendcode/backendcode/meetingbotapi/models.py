from django.db import models

# user model related
from django.contrib.auth.models import User
# Create your models here.
from django.conf import settings
from django.utils import timezone

class Location(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=15)

    def __str__(self):
        return self.name

class ProfileInfo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=10)

class Employee(models.Model):
    user = models.OneToOneField(User, related_name = 'user', on_delete=models.CASCADE)
    employee_id = models.CharField(max_length=7, blank=True)
    location_id = models.ForeignKey(Location, blank=True, on_delete=models.CASCADE, default=1)
    avail_start_time = models.TimeField(default='08:00')
    avail_end_time = models.TimeField(default='16:00')
    profile = models.ForeignKey(ProfileInfo, on_delete=models.CASCADE, default=1)
    def __str__(self):
        return self.employee_id
    class Meta:
        ordering = ['employee_id']
#
# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Employee.objects.create(user=instance)
#
# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.save()


class Room(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=6)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    video_conference = models.BooleanField(default=False)
    number_of_seats = models.IntegerField(default=1)

class TimeSlotInfo(models.Model):
    id = models.AutoField(primary_key=True)
    slot_start = models.TimeField()
    slot_end = models.TimeField()

class RoomMeetingInfo(models.Model):
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE)
    room_meeting_date = models.DateField()
    time_slot_id = models.IntegerField()
    meeting_id = models.IntegerField(default=1)


class Meeting(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    requestor_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    participant = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='participants')
    rooms = models.ManyToManyField(Room, related_name="rooms")
    room_required = models.BooleanField(default=False)
    video_conference_required = models.BooleanField(default=False)
    priority = models.IntegerField(default=4)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)
    type = models.IntegerField(default=1)
    timezone_requestor = models.CharField(max_length=20, default='Europe/Brussels')
    # define slug field for unique url to the Meeting
    slug = models.SlugField(blank=True, max_length=255)

    def create(self):
        self.created = timezone.now()
        self.save()

    @models.permalink
    def get_absolute_url(self):
        return ('meeting_detail', (), {'slug': str(self.title),})

    def __str__(self):
        return "Meeting - " + str(self.title)

    class Meta:
        ordering = ['created']
        verbose_name = u'Meeting'
        verbose_name_plural = u'Meetings'

class EmployeeMeetingInfo(models.Model):
    employee_id = models.CharField(max_length=7, default=1)
    date = models.DateField()
    timeslot_id = models.IntegerField()
    meeting_id = models.IntegerField(default=1)

class Calender(models.Model):
    year = models.IntegerField(default=2018)
    month = models.IntegerField(default=1)
    day = models.IntegerField(default=1)
