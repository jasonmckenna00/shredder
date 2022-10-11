from django.contrib import admin
from mountains.views import *
from django.urls import path,include               
from rest_framework import routers


router = routers.DefaultRouter()         
router.register(r'Mountains', MountainViewSet, 'Mountain')
router.register(r'ResortCompany', ResortCompanyViewSet, 'ResortCompany')
router.register(r'Weather', WeatherViewset, 'Weather')
# router.register(r'Search', SearchViewSet, 'Search')
# router.register(r'WelcomePage', views.index,'welcome')

urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # path('search/')
]
