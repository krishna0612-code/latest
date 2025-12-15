from django.urls import path
from .views import vendor_medicines, update_medicine, public_medicines

urlpatterns = [
    path("medicines/", vendor_medicines),
    path("medicines/<int:medicine_id>/", update_medicine),
    path("public/medicines/", public_medicines),
]
