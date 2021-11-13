from django.db.models import fields
from rest_framework import serializers
from .models import Location, Mountain, ResortCompany

class ResortCompanySerializer(serializers.ModelSerializer):
  class Meta:
    model = ResortCompany
    fields = ['website_link', 'resort_name']

class LocationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Location
    fields = ['location_id', 'latitude', 'longitude', 'state']

class MountainSerializer(serializers.ModelSerializer):
  resort_company = ResortCompanySerializer()
  location = LocationSerializer()
  class Meta:
    model = Mountain
    fields = ['mountain_id', 'name', 'website_link', 'location', 'resort_company']
    # fields = '__all__'

