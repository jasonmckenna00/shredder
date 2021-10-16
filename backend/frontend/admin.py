from django.contrib import admin
from .models import Mountain
# Register your models here.
class MountainAdmin(admin.ModelAdmin):
  mtn = ('name', 'location', 'website_link')
  
admin.site.register(Mountain, MountainAdmin)