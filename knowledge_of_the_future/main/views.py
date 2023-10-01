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


def professions(request):
    return render(request, 'main/Work/list_of_works.html')


def technology(request):
    return render(request, 'main/Work/technology.html')

def science(request):
    return render(request, 'main/Work/science.html')


def engineer(request):
    return render(request, 'main/Work/engineer.html')


def profile(request):
    return render(request, 'main/Profile/profile.html')
