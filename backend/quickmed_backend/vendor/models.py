# import uuid
# from django.db import models

# class Medicine(models.Model):

#     CATEGORY_CHOICES = [
#         ('pregnancy', 'Pregnancy Care'),
#         ('babycare', 'Baby & Child Care'),
#         ('vitamins', 'Vitamins & Supplements'),
#         ('pain', 'Pain Relief'),
#         ('antibiotics', 'Antibiotics'),
#         ('chronic', 'Chronic Care'),
#         ('firstaid', 'First Aid'),
#         ('equipment', 'Medical Equipment'),
#     ]

#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     name = models.CharField(max_length=200)
#     category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
#     batch_no = models.CharField(max_length=100)
#     quantity = models.IntegerField()
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     expiry_date = models.DateField(null=True, blank=True)
#     prescription_required = models.BooleanField(default=False)

#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.name
# #******************************************************
import uuid
from django.db import models
from accounts.models import VendorUser   # ✅ THIS IS MISSING

class Medicine(models.Model):

    CATEGORY_CHOICES = [
        ('pregnancy', 'Pregnancy Care'),
        ('babycare', 'Baby & Child Care'),
        ('vitamins', 'Vitamins & Supplements'),
        ('pain', 'Pain Relief'),
        ('antibiotics', 'Antibiotics'),
        ('chronic', 'Chronic Care'),
        ('firstaid', 'First Aid'),
        ('equipment', 'Medical Equipment'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

    # ❗ Global medicine does NOT own these
    # batch_no, price, quantity → vendor-specific

    prescription_required = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class VendorStock(models.Model):
    vendor = models.ForeignKey(
        VendorUser,
        on_delete=models.CASCADE,
        related_name="stocks"
    )
    medicine = models.ForeignKey(
        Medicine,
        on_delete=models.CASCADE,
        related_name="vendor_stocks"
    )

    # ✅ THESE FIELDS STAY HERE
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    batch_no = models.CharField(max_length=100)
    expiry_date = models.DateField(null=True, blank=True)

    class Meta:
        unique_together = ("vendor", "medicine")

    def __str__(self):
        return f"{self.vendor.storeName} → {self.medicine.name}"

