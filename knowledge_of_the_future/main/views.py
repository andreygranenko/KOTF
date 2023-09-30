from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
def index(request):
    return render(request,'main/index.html' )

def courses(request):
    return render(request,'main/courses.html' )