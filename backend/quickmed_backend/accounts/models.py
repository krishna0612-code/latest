



from django.db import models
from django.contrib.auth.hashers import make_password


# -------------------------------------
# 🟢 PATIENT TABLE
# -------------------------------------
class PatientUser(models.Model):
    fullName = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=255)

    dateOfBirth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=20, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    emergencyContact = models.CharField(max_length=20, null=True, blank=True)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def __str__(self):
        return f"Patient - {self.fullName}"


# -------------------------------------
# 🔵 DOCTOR TABLE
# -------------------------------------
class DoctorUser(models.Model):
    fullName = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=255)

    specialization = models.CharField(max_length=50)
    medicalLicense = models.CharField(max_length=50)
    qualifications = models.TextField()
    # experience = models.IntegerField()
    experience = models.IntegerField(null=True, blank=True, default=0)

    consultationFee = models.IntegerField()
    availableHours = models.TextField()

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def __str__(self):
        return f"Doctor - {self.fullName}"


# -------------------------------------
# 🟡 VENDOR TABLE
# -------------------------------------
class VendorUser(models.Model):
    fullName = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=255)

    storeName = models.CharField(max_length=200)
    businessType = models.CharField(max_length=50)
    gstNumber = models.CharField(max_length=30)
    storeAddress = models.TextField()
    businessLicense = models.CharField(max_length=100)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_approved = models.BooleanField(default=True)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def __str__(self):
        return f"Vendor - {self.storeName}"


# -------------------------------------
# 🟣 DELIVERY PARTNER TABLE
# # -------------------------------------





from django.db import models
from django.contrib.auth.hashers import make_password


class DeliveryUser(models.Model):
    fullName = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=255)

    # Personal Documents
   
    aadharNumber = models.CharField(max_length=20, blank=True, null=True)
    drivingLicenseNumber = models.CharField(max_length=20, blank=True, null=True)

    panNumber = models.CharField(max_length=20, blank=True, null=True)

    # Vehicle & License
    vehicleNumber = models.CharField(max_length=15)
   
    drivingLicenseNumber = models.CharField(max_length=20, blank=True, null=True)
    # File Uploads
    aadharFront = models.ImageField(upload_to="delivery/aadhar/front/", null=True, blank=True)
    aadharBack = models.ImageField(upload_to="delivery/aadhar/back/", null=True, blank=True)
    panCard = models.ImageField(upload_to="delivery/pan/", null=True, blank=True)
    drivingLicenseFront = models.ImageField(upload_to="delivery/license/front/", null=True, blank=True)
    drivingLicenseBack = models.ImageField(upload_to="delivery/license/back/", null=True, blank=True)
    vehicleRC = models.ImageField(upload_to="delivery/vehicle_rc/", null=True, blank=True)
    livePhoto = models.ImageField(upload_to="delivery/live/", null=True, blank=True)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def __str__(self):
        return f"Delivery Partner - {self.fullName}"
