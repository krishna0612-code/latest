from django.db import models
from accounts.models import PatientUser  # IMPORTANT: Use your real model

class UserProfile(models.Model):
    user = models.OneToOneField(
        PatientUser,
        on_delete=models.CASCADE,
        related_name="profile"
    )

    fullName = models.CharField(max_length=200, blank=True)
    email = models.EmailField(max_length=200, blank=True)
    phone = models.CharField(max_length=20, blank=True)

    address = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=100, blank=True)
    pincode = models.CharField(max_length=6, blank=True)
    country = models.CharField(max_length=50, default="India")

    dateOfBirth = models.CharField(max_length=20, blank=True)
    age = models.CharField(max_length=5, blank=True)
    gender = models.CharField(max_length=20, blank=True)

    profilePhoto = models.TextField(blank=True, null=True)
    lastUpdated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Profile of {self.user.fullName}"
