from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')


class EmployeeSerializer(serializers.ModelSerializer):
    """
    A serializer to return the details
    """
    user = UserSerializer(required=True)

    class Meta:
        model = Employee
        fields = ('user', 'employee_id','avail_start_time', 'avail_end_time' )

    def create(self, validated_data):
        """
        Overriding the default create method of the Model serializer.
        :param validated_data: data containing all the details of student
        :return: returns a successfully created student record
        """
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        employee, created = Employee.objects.update_or_create(user=user,
                                                                       employee_id=validated_data.pop('employee_id'),
                                                                       location=validated_data.pop('location'),
                                                                       avail_start_time= str(validated_data.pop('avail_start_time')),
                                                                       avail_end_time= str(validated_data.pop('avail_end_time')))
        return employee

class MeetingSerializer(serializers.ModelSerializer):
    """
    A serializer to return the student details
    """

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Meeting
        fields = ('id', 'title','requestor_id', 'participant', 'rooms', 'room_required','video_conference_required','priority','start_time', 'end_time')
        read_only_fields = ('created', 'slug')

class PeriodicTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = PeriodicTask
        fields = ('name', 'task', 'interval', 'crontab')