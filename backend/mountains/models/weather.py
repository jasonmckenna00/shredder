from email.policy import default
from pickle import FALSE
from django.db import models
from .location import Location
import jsonfield
class Weather(models.Model):
  temperature = models.IntegerField(blank = True)
  snow = models.JSONField(blank = True, default=dict)
  feels_like = models.IntegerField(blank = True)
  humidity = models.IntegerField(blank = True)
  visibility = models.IntegerField(blank = True)
  wind_speed = models.IntegerField(blank = True)
  wind_deg = models.IntegerField(blank = True)
  weather_code = models.IntegerField(blank = True)
  weather_main = models.CharField(blank = True, max_length=28)
  weather_description = models.CharField(blank = True, max_length=28)
  weather_icon = models.CharField(blank = True, max_length=5)
  forecast = jsonfield.JSONField(blank = True, default=list)
  last_updated = models.DateTimeField(blank = True)
  
  
#Check out celery as a reoccuring task controller   
# https://docs.celeryq.dev/en/latest/userguide/periodic-tasks.html
    
# Optimization: have set times each day it fetches request, if theres a get request > 2hr from next weather update: get update  
    
    
# class WeatherDailyItem(model.Model):
#   day_temp = models.IntegerField()
#   min_temp = models.IntegerField()
#   max_temp = models.IntegerField()
#   wind_speed = models.IntegerField()
#   wind_deg = models.IntegerField()
#   weather_code = models.IntegerField()
#   weather_main = models.CharField(max_length=28)
#   weather_description = models.CharField(max_length=28)
#   weather_icon = models.CharField(max_length=5)
  
  
  