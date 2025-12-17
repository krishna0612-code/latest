# # from rest_framework.routers import DefaultRouter
# # from .views import MedicineViewSet, VendorMedicinesView

# # router = DefaultRouter()
# # router.register('medicines', MedicineViewSet, basename='medicines')

# # urlpatterns = router.urls

# # # urls.py
# # path(
# #   "vendors/<int:vendor_id>/medicines/",
# #   VendorMedicinesView.as_view()
# # )

# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import MedicineViewSet, VendorMedicinesView,vendor_medicines

# router = DefaultRouter()
# router.register("medicines", MedicineViewSet, basename="medicines")

# urlpatterns = [
#     # router URLs
#     path("", include(router.urls)),

#     # vendor → medicines (STORE-WISE)
#     path(
#         "vendors/<uuid:vendor_id>/medicines/",
#         VendorMedicinesView.as_view(),
#         name="vendor-medicines",
#         'vendors/<int:vendor_id>/medicines/', vendor_medicines,
#     ),
# ]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MedicineViewSet, VendorMedicinesView

router = DefaultRouter()
router.register("medicines", MedicineViewSet, basename="medicines")

urlpatterns = [
    path("", include(router.urls)),

    # vendor → medicines
    path(
        "vendors/<int:vendor_id>/medicines/",
        VendorMedicinesView.as_view(),
        name="vendor-medicines",
    ),
]
