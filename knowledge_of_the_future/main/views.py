from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html')


def courses(request):
    return render(request, 'main/courses.html')


def motivation(request):
    return render(request, 'main/motivation.html')


def registration(request):
    return render(request, 'main/Profile/registration.html')


def login(request):
    return render(request, 'main/Profile/login.html')


def profile(request):
    return render(request, 'main/Profile/profile.html')
