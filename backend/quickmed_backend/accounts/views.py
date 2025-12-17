

from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response
from rest_framework import status

from .serializers import SignupSerializer

from .models import (
    PatientUser,
    DoctorUser,
    VendorUser,
    DeliveryUser
)

from django.contrib.auth.hashers import check_password
import random






# --------------------------------------------------------
# 🟡 EMAIL LOGIN (For all dashboards)
# --------------------------------------------------------
# @api_view(["POST"])
# def email_login(request):
#     email = request.data.get("email")
#     password = request.data.get("password")
#     userType = request.data.get("userType")

#     user = None

#     if userType == "user":
#         user = PatientUser.objects.filter(email=email).first()
#     elif userType == "doctor":
#         user = DoctorUser.objects.filter(email=email).first()
#     elif userType == "vendor":
#         user = VendorUser.objects.filter(email=email).first()
#     elif userType == "delivery":
#         user = DeliveryUser.objects.filter(email=email).first()
#     else:
#         return Response({"message": "Invalid userType"}, status=400)

#     if not user:
#         return Response({"message": "Invalid login"}, status=400)

#     if not check_password(password, user.password):
#         return Response({"message": "Invalid credentials"}, status=400)

#     return Response({
#         "message": "Login successful",
#         "user": {
#             "fullName": user.fullName,
#             "email": user.email,
#             "phone": user.phone,
#             "userType": userType
#         }
#     }, status=200)



from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password

from accounts.models import (
    PatientUser,
    DoctorUser,
    VendorUser,
    DeliveryUser,
)

@api_view(["POST"])
def email_login(request):
    email = request.data.get("email")
    password = request.data.get("password")
    userType = request.data.get("userType")

    user = None
    vendor_id = None  # ⭐ IMPORTANT

    if userType == "user":
        user = PatientUser.objects.filter(email=email).first()

    elif userType == "doctor":
        user = DoctorUser.objects.filter(email=email).first()

    elif userType == "vendor":
        user = VendorUser.objects.filter(email=email).first()
        if user:
            vendor_id = user.id  # ⭐ THIS FIXES EVERYTHING

    elif userType == "delivery":
        user = DeliveryUser.objects.filter(email=email).first()

    else:
        return Response({"message": "Invalid userType"}, status=400)

    if not user:
        return Response({"message": "Invalid login"}, status=400)

    if not check_password(password, user.password):
        return Response({"message": "Invalid credentials"}, status=400)

    return Response(
        {
            "message": "Login successful",
            "user": {
                "fullName": user.fullName,
                "email": user.email,
                "phone": user.phone,
                "userType": userType,
            },
            # ✅ SEND vendor_id ONLY FOR VENDOR
            "vendor_id": vendor_id,
        },
        status=200,
    )




# --------------------------------------------------------
# 🔵 SEND OTP (ONLY Patient Users)
# --------------------------------------------------------
@api_view(["POST"])
def send_otp(request):
    phone = request.data.get("phone")

    user = PatientUser.objects.filter(phone=phone).first()

    if not user:
        return Response(
            {"message": "This phone number is not registered as a Patient user"},
            status=400
        )

    otp = str(random.randint(1000, 9999))
    print("🎯 OTP for", phone, "is:", otp)

    request.session[f"otp_{phone}"] = otp

    return Response({
        "message": "OTP sent successfully",
        "phone": phone,
        "otp": otp
    }, status=200)



# --------------------------------------------------------
# 🔴 VERIFY OTP (Patient Only)
# --------------------------------------------------------
@api_view(["POST"])
def verify_otp(request):
    phone = request.data.get("phone")
    otp = request.data.get("otp")

    saved_otp = request.session.get(f"otp_{phone}")

    if saved_otp != otp:
        return Response({"message": "Invalid OTP"}, status=400)

    user = PatientUser.objects.filter(phone=phone).first()

    if not user:
        return Response({"message": "User not found"}, status=400)

    return Response({
        "message": "Login successful",
        "user": {
            "fullName": user.fullName,
            "email": user.email,
            "phone": user.phone,
            "userType": "user"
        }
    }, status=200)



# --------------------------------------------------------

from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response
from rest_framework import status

from .serializers import SignupSerializer, DeliverySignupSerializer
from .models import PatientUser, DoctorUser, VendorUser, DeliveryUser
from django.contrib.auth.hashers import check_password
import random


# --------------------------------------------------------
# UNIVERSAL SIGNUP (Patient + Doctor + Vendor)
# --------------------------------------------------------
@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser, JSONParser])
def signup(request):
    serializer = SignupSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()
        return Response({
            "message": "User registered successfully",
            "userId": user.id,
            "userType": request.data.get("userType"),
        }, status=201)

    print("❌ SIGNUP ERROR:", serializer.errors)
    return Response(serializer.errors, status=400)



# --------------------------------------------------------
# DELIVERY SIGNUP (Separate)
# --------------------------------------------------------
@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def delivery_signup(request):
    serializer = DeliverySignupSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()
        return Response({
            "message": "Delivery user registered successfully",
            "userId": user.id
        }, status=201)

    return Response(serializer.errors, status=400)

from .serializers import PublicVendorSerializer
@api_view(["GET"])
def public_vendors(request):
    vendors = VendorUser.objects.filter(
        is_active=True,
        is_approved=True
    ).order_by("-id")

    serializer = PublicVendorSerializer(vendors, many=True)
    return Response(serializer.data)

