from django.db.models import fields
from rest_framework import serializers
from .models import Location, Mountain, ResortCompany

class ResortCompanySerializer(serializers.ModelSerializer):
  class Meta:
    model = ResortCompany
    fields = ['website_link', 'company_name']

class LocationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Location
    fields = [ 'latitude', 'longitude', 'state', 'city', 'country', 'country_code']

class MountainSerializer(serializers.ModelSerializer):
  resort_company = ResortCompanySerializer()
  location = LocationSerializer()
  class Meta:
    model = Mountain
    fields = [ 'id', 'name', 'website_link', 'location', 'resort_company']
    # fields = '__all__'


