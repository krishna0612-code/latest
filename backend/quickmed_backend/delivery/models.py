from django.db import models
from django.contrib.auth.models import User

class DeliveryPartner(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    is_online = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username


class Order(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("assigned", "Assigned"),
        ("pickup_reached", "Pickup Reached"),
        ("pickup_completed", "Pickup Completed"),
        ("delivery_reached", "Delivery Reached"),
        ("delivery_completed", "Delivered"),
        ("cancelled", "Cancelled"),
    ]

    order_id = models.CharField(max_length=20, unique=True)
    delivery_partner = models.ForeignKey(
        DeliveryPartner,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="orders"
    )

    customer_name = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=15)
    pharmacy_name = models.CharField(max_length=100)
    pharmacy_location = models.TextField()
    delivery_location = models.TextField()

    amount = models.DecimalField(max_digits=10, decimal_places=2)
    tip = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default="pending")
    cancel_reason = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
