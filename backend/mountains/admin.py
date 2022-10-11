from django.contrib import admin
from .models import Mountain, ResortCompany, Location, Weather
# Register your models here.
class MountainAdmin(admin.ModelAdmin):
  fields = ['name', 'location', 'website_link', 'resort_company', 'weather']
  
class ResortCompanyAdmin(admin.ModelAdmin):
  fields = ['company_name', 'website_link']

class LocationAdmin(admin.ModelAdmin):
  fields = ['latitude', 'longitude', 'state', 'city', 'country','country_code']

class WeatherAdmin(admin.ModelAdmin):
  fields = ['temperature', 'feels_like', 'humidity', 'visibility', 'wind_speed', 'wind_deg','weather_code',
              'weather_main', 'weather_description', 'weather_icon', 'forecast', 'last_updated']

admin.site.register(ResortCompany, ResortCompanyAdmin)
admin.site.register(Mountain, MountainAdmin)
admin.site.register(Location, LocationAdmin)
admin.site.register(Weather, WeatherAdmin)