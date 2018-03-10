from django.db import models

# user model related
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.
from django.conf import settings
from django.utils import timezone

class Location(models.Model):
    name = models.CharField(max_length=15)

    def __str__(self):
        return self.name

class Employee(models.Model):
    user = models.OneToOneField(User, related_name = 'user', on_delete=models.CASCADE)
    employee_id = models.CharField(max_length=7, blank=True)
    # location = models.ForeignKey(Location, blank=True)
    avail_start_time = models.TimeField(default='08:00')
    avail_end_time = models.TimeField(default='16:00')

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

    def __str__(self):
        return self.name

class Meeting(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    requestor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    participant = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='participants')
    rooms = models.ManyToManyField(Room, related_name="rooms")
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)
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
