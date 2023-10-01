"""
URL configuration for knowledge_of_the_future project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index, name = 'main'),
    path('courses/', views.courses, name = 'courses'),
    path('motivation/', views.motivation, name = 'motivation'),

    path('professions/', views.professions, name = 'professions'),
    path('professions/technology', views.technology, name = 'technology'),
    path('professions/science', views.science, name = 'science'),
    path('professions/engineer', views.engineer, name = 'engineer'),

    path('profile/', views.profile, name = 'profile'),


    path('registration/', views.registration, name = 'registration'),
    path('login/', views.login, name = 'login'),
]
