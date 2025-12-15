from django.db import models
from accounts.models import VendorUser

class Medicine(models.Model):
    vendor = models.ForeignKey(
        VendorUser,
        on_delete=models.CASCADE,
        related_name="medicines"
    )

    name = models.CharField(max_length=150)
    category = models.CharField(max_length=100)
    batch_no = models.CharField(max_length=50)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    expiry_date = models.DateField(null=True, blank=True)
    prescription_required = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
