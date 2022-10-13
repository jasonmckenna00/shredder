from django.db.models import fields
from rest_framework import serializers
from .models import Location, Mountain, ResortCompany, Weather

class ResortCompanySerializer(serializers.ModelSerializer):
  class Meta:
    model = ResortCompany
    fields = ['website_link', 'company_name']

class LocationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Location
    fields = [ 'id','latitude', 'longitude', 'state', 'state_code','city', 'country', 'country_code']


class WeatherSerializer(serializers.ModelSerializer):
  class Meta:
    location = LocationSerializer()
    model=Weather
    # fields = ['temperature', 'feels_like', 'humidity', 'visibility', 'wind_speed', 'wind_deg','weather_code',
    #           'weather_main', 'weather_description', 'weather_icon', 'forecast']
    fields = '__all__'

class MountainSerializer(serializers.ModelSerializer):
  resort_company = ResortCompanySerializer()
  location = LocationSerializer()
  weather = WeatherSerializer()
  class Meta:
    model = Mountain
    fields = [ 'id', 'name', 'website_link', 'location', 'resort_company', 'weather']
    # fields = '__all__'

