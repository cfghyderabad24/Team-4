from django.urls import path
from .views import *

urlpatterns = [
  path('register/', RegisterUser.as_view()),
  path('login/', LoginUser.as_view()),
  path('student/', StudentCreate.as_view()),
  path('student/list/', StudentList.as_view()),
  path('action/<int:pk>/', StudentApprove.as_view()),
  path('student/pending/', StudentPendingList.as_view()),
]