from django.contrib import admin
from shredder import views
from django.urls import path,include               
from rest_framework import routers


router = routers.DefaultRouter()         
router.register(r'Mountains', views.MountainView, 'mountain')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', include('shredder.urls'))
]
