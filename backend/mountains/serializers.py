from django.db.models import fields
from rest_framework import serializers
from .models import Mountain, ResortCompany

class MountainSerializer(serializers.ModelSerializer):
  class Meta:
    model = Mountain
    fields = ('mountain_id', 'name', 'website_link', 'location', 'resort_company')

class ResortCompanySerializer(serializers.ModelSerializer):
  class Meta:
    model = ResortCompany
    fields = ('resort_company_id','resort_name','website_link')