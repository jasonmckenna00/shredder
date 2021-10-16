from django.db.models import fields
from rest_framework import serializers
from .models import Mountain

class MountainSerializer(serializers.ModelSerializer):
  class Meta:
    model = Mountain
    fields = ('id', 'name', 'website_link', 'location')