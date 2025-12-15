from django.urls import path
from .views import get_profile, update_profile

urlpatterns = [
    path("<int:user_id>/", get_profile),
    path("<int:user_id>/update/", update_profile),
   


]
