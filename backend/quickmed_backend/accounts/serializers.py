
from rest_framework import serializers
from .models import PatientUser, DoctorUser, VendorUser, DeliveryUser


# ------------------------------------------------------------
# UNIVERSAL SIGNUP (Patient, Doctor, Vendor) - NO IMAGES HERE
# ------------------------------------------------------------
class SignupSerializer(serializers.Serializer):
    # COMMON FIELDS
    fullName = serializers.CharField()
    email = serializers.EmailField()
    phone = serializers.CharField()
    password = serializers.CharField(write_only=True)
    userType = serializers.CharField()

    # PATIENT FIELDS
    dateOfBirth = serializers.CharField(required=False, allow_blank=True)
    gender = serializers.CharField(required=False, allow_blank=True)
    deliveryAddress = serializers.CharField(required=False, allow_blank=True)
    emergencyContact = serializers.CharField(required=False, allow_blank=True)

    # DOCTOR FIELDS
    specialization = serializers.CharField(required=False, allow_blank=True)
    medicalLicense = serializers.CharField(required=False, allow_blank=True)
    yearsOfExperience = serializers.IntegerField(required=False)
    consultationFee = serializers.IntegerField(required=False)
    clinicAddress = serializers.CharField(required=False, allow_blank=True)

    # VENDOR FIELDS
    pharmacyName = serializers.CharField(required=False, allow_blank=True)
    gstNumber = serializers.CharField(required=False, allow_blank=True)
    businessLicense = serializers.CharField(required=False, allow_blank=True)
    address = serializers.CharField(required=False, allow_blank=True)

    # ------------------------------------------------------
    # VALIDATION FIX
    # ------------------------------------------------------
    def validate(self, attrs):
        userType = attrs.get("userType")

        # Remove patient-only fields when user is doctor or vendor
        if userType != "user":
            attrs.pop("dateOfBirth", None)
            attrs.pop("gender", None)
            attrs.pop("deliveryAddress", None)
            attrs.pop("emergencyContact", None)

        return attrs

    # ------------------------------------------------------
    # CREATE USER LOGIC
    # ------------------------------------------------------
    def create(self, validated_data):
        userType = validated_data.pop("userType")
        raw_password = validated_data.pop("password")

        # PATIENT
        if userType == "user":
            validated_data["address"] = validated_data.pop("deliveryAddress", "")
            user = PatientUser(**validated_data)
            user.set_password(raw_password)
            user.save()
            return user

        # DOCTOR
        if userType == "doctor":
            doctor_data = {
                "fullName": validated_data.get("fullName"),
                "email": validated_data.get("email"),
                "phone": validated_data.get("phone"),

                "specialization": validated_data.get("specialization"),
                "medicalLicense": validated_data.get("medicalLicense"),
                "experience": validated_data.get("yearsOfExperience", 0),
                "consultationFee": validated_data.get("consultationFee", 0),
                "qualifications": validated_data.get("clinicAddress", ""),
                "availableHours": "Not Provided",
            }

            user = DoctorUser(**doctor_data)
            user.set_password(raw_password)
            user.save()
            return user

        # VENDOR
        if userType == "vendor":
            vendor_data = {
                "fullName": validated_data.get("fullName"),
                "email": validated_data.get("email"),
                "phone": validated_data.get("phone"),

                "storeName": validated_data.get("pharmacyName"),
                "gstNumber": validated_data.get("gstNumber"),
                "storeAddress": validated_data.get("address", ""),
                "businessLicense": validated_data.get("businessLicense"),
                "businessType": "pharmacy",
            }

            user = VendorUser(**vendor_data)
            user.set_password(raw_password)
            user.save()
            return user

        raise serializers.ValidationError("Invalid userType")



# ------------------------------------------------------------
# SEPARATE DELIVERY SIGNUP SERIALIZER (WITH IMAGES)
# ------------------------------------------------------------
class DeliverySignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryUser
        fields = [
            "fullName", "email", "phone", "password",

            "aadharNumber", "panNumber",
            "vehicleNumber", "drivingLicenseNumber",

            # FILE UPLOADS
            "aadharFront", "aadharBack",
            "panCard",
            "drivingLicenseFront", "drivingLicenseBack",
            "vehicleRC", "livePhoto",
        ]

        extra_kwargs = {
            "password": {"write_only": True},
        }

    def create(self, validated_data):
        raw_password = validated_data.pop("password")
        user = DeliveryUser(**validated_data)
        user.set_password(raw_password)
        user.save()
        return user



class PublicVendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = VendorUser
        fields = [
            "id",
            "storeName",
            "storeAddress",
            "businessType",
        ]
