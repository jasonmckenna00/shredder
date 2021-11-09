from enum import Enum
from django.db import models
from django.core.validators import MinLengthValidator
from django.db.models.enums import Choices, TextChoices
from django.db.models.fields import CharField



class ResortNameItem(models.TextChoices):
    IKON = 'Ikon'
    EPIC = 'Epic'
    OTHER = 'Other'

class ResortCompany(models.Model):
  resort_company_id = models.CharField(primary_key=True, max_length=120)
  resort_name = models.CharField(max_length=12, choices=ResortNameItem.choices,default=ResortNameItem.OTHER)
  website_link = models.CharField(max_length=120, blank=True)

# class Location(models.Model):
#   state


class Mountain(models.Model):
  mountain_id = models.CharField(primary_key=True,blank=False, max_length=120)
  name = models.CharField(default="SampleName",max_length=60, blank=False)
  website_link = models.CharField(max_length=120, blank=True)
  location = models.CharField(max_length=120, blank=True)
  resort_company = models.ForeignKey(ResortCompany, on_delete=models.CASCADE, blank=False, default=ResortNameItem.OTHER)


