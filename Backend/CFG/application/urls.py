from django.urls import path
from .views import *

urlpatterns = [
    path('formA/<int:pk>/',StudentFormAPIView.as_view()),
    path('formA/create/<int:pk>/',StudentFormCreateAPIView.as_view()),

  # Add your URL patterns here
]