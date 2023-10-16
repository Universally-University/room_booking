from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "dist/index.html")

def my_reservation(request):
    return render(request, "dist/my-reservation/index.html")

def reserve(request):
    return render(request, "dist/reserve/index.html")