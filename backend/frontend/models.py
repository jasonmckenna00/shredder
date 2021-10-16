from django.db import models
from django.core.validators import MinLengthValidator

class Mountain(models.Model):
  id = models.CharField(primary_key=True,blank=False, max_length=120)
  name = models.CharField(default="SampleName",max_length=50, blank=False)
  website_link = models.CharField(max_length=50, blank=True)
  location = models.CharField(max_length=120, blank=True)



  