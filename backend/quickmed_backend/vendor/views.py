# from rest_framework import viewsets, status
# from rest_framework.decorators import action
# from rest_framework.response import Response
# from django.utils.timezone import now
# from datetime import timedelta
# from .models import Medicine
# from .serializers import MedicineSerializer


# class MedicineViewSet(viewsets.ModelViewSet):
#     serializer_class = MedicineSerializer
#     queryset = Medicine.objects.all().order_by("-updated_at")

#     # 🔥 IMPORTANT: override create to see errors
#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)

#         if not serializer.is_valid():
#             print("❌ MEDICINE CREATE ERROR:", serializer.errors)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#         self.perform_create(serializer)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

#     def get_queryset(self):
#         qs = Medicine.objects.all()

#         category = self.request.query_params.get("category")
#         search = self.request.query_params.get("search")
#         stock_filter = self.request.query_params.get("stock_filter")

#         if category and category != "all":
#             qs = qs.filter(category=category)

#         if search:
#             qs = qs.filter(name__icontains=search)

#         if stock_filter == "lowstock":
#             qs = qs.filter(quantity__lt=10)

#         if stock_filter == "expiring":
#             qs = qs.filter(
#                 expiry_date__lte=now().date() + timedelta(days=30),
#                 expiry_date__isnull=False,
#             )

#         if stock_filter == "prescription":
#             qs = qs.filter(prescription_required=True)

#         return qs

#     @action(detail=False, methods=["get"])
#     def stats(self, request):
#         qs = Medicine.objects.all()
#         return Response({
#             "all": qs.count(),
#             "pregnancy": qs.filter(category="pregnancy").count(),
#             "babycare": qs.filter(category="babycare").count(),
#             "vitamins": qs.filter(category="vitamins").count(),
#             "pain": qs.filter(category="pain").count(),
#             "antibiotics": qs.filter(category="antibiotics").count(),
#             "chronic": qs.filter(category="chronic").count(),
#             "firstaid": qs.filter(category="firstaid").count(),
#             "equipment": qs.filter(category="equipment").count(),
#         })


from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils.timezone import now
from datetime import timedelta
from .models import Medicine
from .serializers import MedicineSerializer


class MedicineViewSet(viewsets.ModelViewSet):
    serializer_class = MedicineSerializer
    queryset = Medicine.objects.all().order_by("-updated_at")

    # 🔥 IMPORTANT: override create to see errors
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            print("❌ MEDICINE CREATE ERROR:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def get_queryset(self):
        qs = Medicine.objects.all()

        category = self.request.query_params.get("category")
        search = self.request.query_params.get("search")
        stock_filter = self.request.query_params.get("stock_filter")

        if category and category != "all":
            qs = qs.filter(category=category)

        if search:
            qs = qs.filter(name__icontains=search)

        if stock_filter == "lowstock":
            qs = qs.filter(quantity__lt=10)

        if stock_filter == "expiring":
            qs = qs.filter(
                expiry_date__lte=now().date() + timedelta(days=30),
                expiry_date__isnull=False,
            )

        if stock_filter == "prescription":
            qs = qs.filter(prescription_required=True)

        return qs

    @action(detail=False, methods=["get"])
    def stats(self, request):
        qs = Medicine.objects.all()
        return Response({
            "all": qs.count(),
            "pregnancy": qs.filter(category="pregnancy").count(),
            "babycare": qs.filter(category="babycare").count(),
            "vitamins": qs.filter(category="vitamins").count(),
            "pain": qs.filter(category="pain").count(),
            "antibiotics": qs.filter(category="antibiotics").count(),
            "chronic": qs.filter(category="chronic").count(),
            "firstaid": qs.filter(category="firstaid").count(),
            "equipment": qs.filter(category="equipment").count(),
        })


from rest_framework.generics import ListAPIView
from .models import VendorStock
from .serializers import VendorMedicineSerializer


class VendorMedicinesView(ListAPIView):
    serializer_class = VendorMedicineSerializer

    def get_queryset(self):
        vendor_id = self.kwargs["vendor_id"]
        return VendorStock.objects.select_related("medicine").filter(
            vendor_id=vendor_id
        )

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Medicine
from .serializers import MedicineSerializer

@api_view(['GET'])
def vendor_medicines(request, vendor_id):
    medicines = Medicine.objects.filter(vendor_id=vendor_id)
    serializer = MedicineSerializer(medicines, many=True)
    return Response(serializer.data)
