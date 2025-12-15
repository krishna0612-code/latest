from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .models import Medicine
from .serializers import MedicineSerializer

# 🔹 Vendor: get + add medicines
@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def vendor_medicines(request):
    vendor = request.user

    if request.method == "GET":
        medicines = Medicine.objects.filter(vendor=vendor)
        serializer = MedicineSerializer(medicines, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = MedicineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(vendor=vendor)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


# 🔹 Vendor: update stock
@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_medicine(request, medicine_id):
    try:
        medicine = Medicine.objects.get(id=medicine_id, vendor=request.user)
    except Medicine.DoesNotExist:
        return Response({"error": "Not found"}, status=404)

    serializer = MedicineSerializer(medicine, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=400)


# 🔹 User side: get all available medicines
@api_view(["GET"])
def public_medicines(request):
    medicines = Medicine.objects.filter(quantity__gt=0)
    serializer = MedicineSerializer(medicines, many=True)
    return Response(serializer.data)
