from enum import Enum
from operator import truediv
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
  def __str__(self):
    return f'{self.company_name}'
  # resort_company_id = models.CharField(primary_key=True, max_length=120)
  company_name = models.CharField(max_length=12, choices=ResortNameItem.choices,default=ResortNameItem.OTHER)
  website_link = models.CharField(max_length=120, blank=True)

#############

class StateName(models.TextChoices):
  ALABAMA = 'Alabama'
  ALASKA = 'Alaska'
  AMERICANSAMOA = 'American Samoa'
  ARIZONA = 'Arizona'
  ARKANSAS = 'Arkansas'
  CALIFORNIA = 'California'
  COLORADO = 'Colorado'
  CONNECTICUT = 'Connecticut'
  DELAWARE = 'Delaware'
  FLORIDA = 'Florida'
  GEORGIA = 'Georgia'
  GUAM = 'Guam'
  HAWAII = 'Hawaii'
  IDAHO = 'Idaho'
  ILLINOIS = 'Illinois'
  INDIANA = 'Indiana'
  IOWA = 'Iowa'
  KANSAS = 'Kansas'
  KENTUCKY = 'Kentucky'
  LOUISIANA = 'Louisiana'
  MAINE = 'Maine'
  MARYLAND = 'Maryland'
  MASSACHUSETTS = 'Massachusetts'
  MICHIGAN = 'Michigan'
  MINNESOTA = 'Minnesota'
  MISSISSIPPI = 'Mississippi'
  MISSOURI = 'Missouri'
  MONTANA = 'Montana'
  NEBRASKA = 'Nebraska'
  NEVADA = 'Nevada'
  NEWHAMPSHIRE = 'New Hampshire'
  NEWJERSEY = 'New Jersey'
  NEWMEXICO = 'New Mexico'
  NEWYORK = 'New York'
  NORTHCAROLINA = 'North Carolina'
  NORTHDAKOTA = 'North Dakota'
  OHIO = 'Ohio'
  OKLAHOMA = 'Oklahoma'
  OREGON = 'Oregon'
  PALAU = 'Palau'
  PENNSYLVANIA = 'Pennsylvania'
  PUERTORICO = 'Puerto Rico'
  RHODEISLAND = 'Rhode Island'
  SOUTHCAROLINA = 'South Carolina'
  SOUTHDAKOTA = 'South Dakota'
  TENNESSEE = 'Tennessee'
  TEXAS = 'Texas'
  UTAH = 'Utah'
  VERMONT = 'Vermont'
  VIRGINISLANDS = 'Virgin Islands'
  VIRGINIA = 'Virginia'
  WASHINGTON = 'Washington'
  WESTVIRGINIA = 'West Virginia'
  WISCONSIN = 'Wisconsin'
  WYOMING = 'Wyoming'

class Location(models.Model):
  def __str__(self):
    return f'{self.city}, {self.state}'
  # location_id = models.CharField(primary_key=True, blank=False, max_length=30)
  latitude = models.CharField(max_length=10, blank=True)
  longitude = models.CharField(max_length=10, blank=True)
  state = models.CharField(max_length=20, choices=StateName.choices, default=StateName.COLORADO)
  city = models.CharField(max_length=60, blank=True)
  country = models.CharField(max_length=60, blank=True)
  country_code = models.CharField(max_length=2, blank=True)

####################

class Mountain(models.Model):
  def __str__(self):
    return f'{self.name}'
  # mountain_id = models.CharField(primary_key=True,blank=False, max_length=120)
  name = models.CharField(default="SampleName",max_length=60, blank=False)
  website_link = models.CharField(max_length=120, blank=True)
  location = models.ForeignKey(Location, on_delete=models.CASCADE, blank=True)
  resort_company = models.ForeignKey(ResortCompany, on_delete=models.CASCADE, blank=False, default=ResortNameItem.OTHER)


## Fields to add -> Lift Count + info, terrain, snow parks