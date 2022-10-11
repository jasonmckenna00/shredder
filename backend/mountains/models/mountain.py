from django.db import models
from django.core.validators import MinLengthValidator
from django.db.models.enums import Choices, TextChoices
from django.db.models.fields import CharField
from .location import Location
from .resort_company import ResortCompany, ResortNameItem
from .weather import Weather

class Mountain(models.Model):
  def __str__(self):
    return f'{self.name}'
  # mountain_id = models.CharField(primary_key=True,blank=False, max_length=120)
  name = models.CharField(default="SampleName",max_length=60, blank=False)
  website_link = models.CharField(max_length=120, blank=True)
  location = models.ForeignKey(Location, on_delete=models.CASCADE, blank=True)
  resort_company = models.ForeignKey(ResortCompany, on_delete=models.CASCADE, blank=False, default=ResortNameItem.OTHER)
  weather = models.ForeignKey(Weather, on_delete=models.CASCADE, blank=True, null=True)
## Fields to add -> Lift Count + info, terrain, snow parks## 
## start regional
                                     