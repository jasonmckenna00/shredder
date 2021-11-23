from django.http import HttpResponse
from django.shortcuts import render
from .serializers import MountainSerializer, ResortCompanySerializer, LocationSerializer
from rest_framework import viewsets, filters    
from .models import Mountain, ResortCompany, Location       


class MountainViewSet(viewsets.ModelViewSet):
    serializer_class = MountainSerializer
    search_fields = ['name','resort_company__resort_name','location__state','location__city']
    filter_backends = [filters.SearchFilter]
    queryset = Mountain.objects.all()



class ResortCompanyViewSet(viewsets.ModelViewSet):
    serializer_class = ResortCompanySerializer
    queryset = ResortCompany.objects.all()

class LocationViewset(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()

    

# https://www.section.io/engineering-education/react-and-django-rest-framework/
def index(request):
    return HttpResponse("Backend index page")