from django.db.models import fields
from rest_framework import serializers
from .models import Mountain, ResortCompany

class MountainSerializer(serializers.ModelSerializer):
  class Meta:
    model = Mountain
    # fields = ('mountain_id', 'name', 'website_link', 'location', 'resort_company')
    fields = '__all__'

class ResortCompanySerializer(serializers.ModelSerializer):
  class Meta:
    model = ResortCompany
    fields = '__all__'