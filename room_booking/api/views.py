from rest_framework import viewsets
from .serializers import ReservationSerializer, RoomSerializer
from .models import Reservation, Room


class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all().order_by("-date")
    serializer_class = ReservationSerializer
    # permission_classes = [permissions.AllowAny]
    search_fields = ["=member_id"]
    filterset_fields = ["member_id", "date", "start_time", "end_time", "room"]


class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all().order_by("room_id")
    serializer_class = RoomSerializer
    # permission_classes = [permissions.AllowAny]
    # search_fields = ["=user_id"]
    filterset_fields = ["num_seats"]
