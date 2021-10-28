from django.http import HttpResponse
from django.shortcuts import render
from .serializers import MountainSerializer 
from rest_framework import viewsets    
from .models import Mountain       


class MountainView(viewsets.ModelViewSet):
    serializer_class = MountainSerializer
    queryset = Mountain.objects.all()

# https://www.section.io/engineering-education/react-and-django-rest-framework/
def index(request):
    return HttpResponse("Backend index page")