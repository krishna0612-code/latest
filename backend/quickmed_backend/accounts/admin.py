
from django.contrib import admin
from .models import PatientUser, DoctorUser, VendorUser, DeliveryUser

admin.site.register(PatientUser)
admin.site.register(DoctorUser)
admin.site.register(VendorUser)
admin.site.register(DeliveryUser)
