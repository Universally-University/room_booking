from django.urls import path
from .views import index, my_reservation, reserve

urlpatterns = [
    path("", index, name="Enrollments"),
    path("reserve/", reserve),
    path("my-reservation", my_reservation),
]
