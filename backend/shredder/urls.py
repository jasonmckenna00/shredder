from django.contrib import admin
from mountains.views import *
from django.urls import path,include               
from rest_framework import routers


router = routers.DefaultRouter()         
router.register(r'Mountains', MountainViewSet, 'mountain')
router.register(r'ResortCompany', ResortCompanyViewSet, 'resortcompany')

# router.register(r'WelcomePage', views.index,'welcome')

urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
