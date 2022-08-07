from django.http import HttpResponse
from django.shortcuts import render
from .serializers import MountainSerializer, ResortCompanySerializer, LocationSerializer
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend  
from .models import Mountain, ResortCompany, Location       


class MountainViewSet(viewsets.ModelViewSet):
    serializer_class = MountainSerializer
    search_fields = ['name',
      'resort_company__resort_name',
      'location__state',
      'location__city',
      'location__country',
      'location__country_code'
      ]
    filterset_fields = { # api/Mountains?id__in=1,3
      'id' : ['in', 'exact']
    }
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    queryset = Mountain.objects.all()



class ResortCompanyViewSet(viewsets.ModelViewSet):
    serializer_class = ResortCompanySerializer
    queryset = ResortCompany.objects.all()

class LocationViewset(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()

# for car in Car.objects.filter(id__in=(1,2)):
#     print(car.license + car.vin)

# https://www.section.io/engineering-education/react-and-django-rest-framework/
def index(request):
    return HttpResponse("Backend index page")