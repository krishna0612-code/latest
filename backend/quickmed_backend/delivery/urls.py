from django.urls import path
from . import views

urlpatterns = [
    path("orders/available/", views.available_orders),
    path("orders/accept/<str:order_id>/", views.accept_order),
    path("orders/cancel/<str:order_id>/", views.cancel_order),
    path("orders/my/", views.my_orders),
]
