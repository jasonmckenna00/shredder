from django.contrib import admin
from .models import Mountain, ResortCompany, Location
# Register your models here.
class MountainAdmin(admin.ModelAdmin):
  fields = ['name', 'location', 'website_link', 'resort_company']
  
class ResortCompanyAdmin(admin.ModelAdmin):
  fields = ['resort_name', 'website_link']

class LocationAdmin(admin.ModelAdmin):
  fields = ['latitude', 'longitude', 'state', 'city']

admin.site.register(ResortCompany, ResortCompanyAdmin)
admin.site.register(Mountain, MountainAdmin)
admin.site.register(Location, LocationAdmin)