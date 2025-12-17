# from rest_framework import serializers
# from .models import Medicine


# class MedicineSerializer(serializers.ModelSerializer):

#     # 👇 OVERRIDE the model field (THIS IS THE FIX)
#     category = serializers.CharField()

#     CATEGORY_MAP = {
#         "Pregnancy Care": "pregnancy",
#         "Baby Care": "babycare",
#         "Vitamins & Supplements": "vitamins",
#         "Pain Relief": "pain",
#         "Antibiotics": "antibiotics",
#         "Chronic Care": "chronic",
#         "First Aid": "firstaid",
#         "Medical Equipment": "equipment",
#     }

#     class Meta:
#         model = Medicine
#         fields = "__all__"

#     # ---------- FIELD VALIDATIONS ----------

#     def validate_name(self, value):
#         if not value or not value.strip():
#             raise serializers.ValidationError("Medicine name is required.")
#         return value.strip()

#     def validate_quantity(self, value):
#         if value < 0:
#             raise serializers.ValidationError("Quantity cannot be negative.")
#         return value

#     def validate_price(self, value):
#         if value < 0:
#             raise serializers.ValidationError("Price cannot be negative.")
#         return value

#     def validate_low_stock_threshold(self, value):
#         if value < 0:
#             raise serializers.ValidationError("Low stock threshold cannot be negative.")
#         return value

#     # ✅ THIS WILL NOW BE CALLED
#     def validate_category(self, value):

#         # Frontend label → backend key
#         if value in self.CATEGORY_MAP:
#             return self.CATEGORY_MAP[value]

#         # Already valid backend key
#         valid_keys = [choice[0] for choice in Medicine.CATEGORY_CHOICES]
#         if value in valid_keys:
#             return value

#         raise serializers.ValidationError(
#             f"Invalid category. Allowed values: {list(self.CATEGORY_MAP.keys())}"
#         )

#     # ---------- OBJECT LEVEL ----------

#     def validate(self, data):
#         if data.get("expiry_date") == "":
#             data["expiry_date"] = None

#         if data.get("supplier") == "":
#             data["supplier"] = "N/A"

#         if data.get("batch_number") == "":
#             data["batch_number"] = None

#         return data


# --------------------------------------------------------
from rest_framework import serializers
from .models import Medicine

class MedicineSerializer(serializers.ModelSerializer):

    category = serializers.CharField()

    CATEGORY_MAP = {
        "Pregnancy Care": "pregnancy",
        "Baby Care": "babycare",
        "Vitamins & Supplements": "vitamins",
        "Pain Relief": "pain",
        "Antibiotics": "antibiotics",
        "Chronic Care": "chronic",
        "First Aid": "firstaid",
        "Medical Equipment": "equipment",
    }

    class Meta:
        model = Medicine
        fields = [
            "id",
            "name",
            "category",
            "prescription_required",
            "created_at",
            "updated_at",
        ]

    def validate_name(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("Medicine name is required.")
        return value.strip()

    def validate_category(self, value):
        if value in self.CATEGORY_MAP:
            return self.CATEGORY_MAP[value]

        valid_keys = [choice[0] for choice in Medicine.CATEGORY_CHOICES]
        if value in valid_keys:
            return value

        raise serializers.ValidationError(
            f"Invalid category. Allowed values: {valid_keys}"
        )
from rest_framework import serializers
from .models import VendorStock

class VendorMedicineSerializer(serializers.ModelSerializer):

    # 🔗 medicine fields
    id = serializers.UUIDField(source="medicine.id", read_only=True)
    name = serializers.CharField(source="medicine.name", read_only=True)
    category = serializers.CharField(source="medicine.category", read_only=True)
    prescription_required = serializers.BooleanField(
        source="medicine.prescription_required",
        read_only=True
    )

    class Meta:
        model = VendorStock
        fields = [
            "id",
            "name",
            "category",
            "price",
            "quantity",
            "batch_no",
            "expiry_date",
            "prescription_required",
        ]

    # ✅ VALIDATIONS (NOW CORRECT PLACE)
    def validate_quantity(self, value):
        if value < 0:
            raise serializers.ValidationError("Quantity cannot be negative.")
        return value

    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError("Price cannot be negative.")
        return value
