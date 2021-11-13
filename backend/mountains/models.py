from enum import Enum
from django.db import models
from django.core.validators import MinLengthValidator
from django.db.models.enums import Choices, TextChoices
from django.db.models.fields import CharField


##############
class ResortNameItem(models.TextChoices):
    IKON = 'Ikon'
    EPIC = 'Epic'
    OTHER = 'Other'

class ResortCompany(models.Model):
  resort_company_id = models.CharField(primary_key=True, max_length=120)
  resort_name = models.CharField(max_length=12, choices=ResortNameItem.choices,default=ResortNameItem.OTHER)
  website_link = models.CharField(max_length=120, blank=True)

#############

class StateName(models.TextChoices):
  COLORADO = 'Colorado'
  UTAH = 'Utah'
  IDAHO = 'Idaho'
  CALIFORNIA = 'California'
  WASHINGTON = 'Washington' 
  MINNESOTA = 'Minnesota'
  NEWYORK = 'New York'
  VERMONT = 'Vermont'
  NEWHAMPSHIRE = 'New Hampshire'
  PENNSYLVANIA = 'Pennsylvania'
  MAINE = 'Maine'
  NEWMEXICO = 'New Mexico'
  OREGON = 'Oregon'
  WESTVIRGINIA = 'West Virginia'
  WYOMING = 'Wyoming'
  CANADA = 'Canada'

class Location(models.Model):
  location_id = models.CharField(primary_key=True, blank=False, max_length=30)
  latitude = models.CharField(max_length=10, blank=True)
  longitude = models.CharField(max_length=10, blank=True)
  state = models.CharField(max_length=20, choices=StateName.choices, default=StateName.COLORADO)


####################

class Mountain(models.Model):
  mountain_id = models.CharField(primary_key=True,blank=False, max_length=120)
  name = models.CharField(default="SampleName",max_length=60, blank=False)
  website_link = models.CharField(max_length=120, blank=True)
  location = models.ForeignKey(Location, on_delete=models.CASCADE, blank=True)
  resort_company = models.ForeignKey(ResortCompany, on_delete=models.CASCADE, blank=False, default=ResortNameItem.OTHER)


