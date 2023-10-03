from django.db import models
from django.utils.translation import gettext_lazy as _


class Room(models.Model):
    room_id = models.IntegerField(_("Room ID"), primary_key=True)
    num_seats = models.IntegerField(_("Max Number of Seats"), default=0)


class Reservation(models.Model):
    res_id = models.AutoField(_("Reservation ID"), primary_key=True)
    room = models.ForeignKey(Room, to_field="room_id", on_delete=models.CASCADE)
    date = models.DateField(_("Date"))
    start_time = models.TimeField(_("Start Time"))
    end_time = models.TimeField(_("End Time"))
    member_id = models.IntegerField(_("Member ID"), null=True)
