from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Order, DeliveryPartner
from .serializers import OrderSerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def available_orders(request):
    orders = Order.objects.filter(status="pending")
    return Response(OrderSerializer(orders, many=True).data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def accept_order(request, order_id):
    partner = DeliveryPartner.objects.get(user=request.user)
    order = Order.objects.get(order_id=order_id)

    order.delivery_partner = partner
    order.status = "assigned"
    order.save()

    return Response({"message": "Order accepted"})


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def cancel_order(request, order_id):
    order = Order.objects.get(order_id=order_id, delivery_partner__user=request.user)
    order.status = "cancelled"
    order.cancel_reason = request.data.get("reason", "")
    order.save()

    return Response({"message": "Order cancelled"})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def my_orders(request):
    orders = Order.objects.filter(delivery_partner__user=request.user)
    return Response(OrderSerializer(orders, many=True).data)
