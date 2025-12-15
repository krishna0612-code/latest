from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import UserProfile
from .serializers import UserProfileSerializer
from accounts.models import PatientUser

# --------------------------
# GET PROFILE BY USER ID
# --------------------------
@api_view(["GET"])
def get_profile(request, user_id):
    try:
        user = PatientUser.objects.get(id=user_id)
    except PatientUser.DoesNotExist:
        return Response({"error": "User not found"}, status=404)

    profile, created = UserProfile.objects.get_or_create(user=user)

    serializer = UserProfileSerializer(profile)
    return Response(serializer.data, status=200)


# --------------------------
# UPDATE PROFILE
# --------------------------
@api_view(["PUT"])
def update_profile(request, user_id):
    try:
        user = PatientUser.objects.get(id=user_id)
    except PatientUser.DoesNotExist:
        return Response({"error": "User not found"}, status=404)

    profile, created = UserProfile.objects.get_or_create(user=user)

    serializer = UserProfileSerializer(profile, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)

    return Response(serializer.errors, status=400)
