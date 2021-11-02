from django.contrib import admin
from shredder import views
from django.urls import path,include               
from rest_framework import routers


router = routers.DefaultRouter()         
router.register(r'Mountains', views.MountainView, 'mountain')
# router.register(r'WelcomePage', views.index,'welcome')

urlpatterns = [
    path('', views.index),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
