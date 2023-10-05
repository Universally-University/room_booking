from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "frontend/index.html")

def my_reservation(request):
    return render(request, "frontend/my-reservation/index.html")

def reserve(request):
    return render(request, "frontend/reserve/index.html")