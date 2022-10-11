from django.db import models
from django.core.validators import MinLengthValidator
from django.db.models.enums import Choices, TextChoices
from django.db.models.fields import CharField

class ResortNameItem(models.TextChoices):
    IKON = 'Ikon'
    EPIC = 'Epic'
    OTHER = 'Other'

class ResortCompany(models.Model):
  def __str__(self):
    return f'{self.company_name}'
  # resort_company_id = models.CharField(primary_key=True, max_length=120)
  company_name = models.CharField(max_length=12, choices=ResortNameItem.choices,default=ResortNameItem.OTHER)
  website_link = models.CharField(max_length=120, blank=True)