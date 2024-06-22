from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from rest_framework import status
from rest_framework.authtoken.models import Token
from .serializers import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .serializers import StudentSerializer

class RegisterUser(APIView):

    def post(self, request):
        data = request.data
        serializer = RegisterUserSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_201_CREATED)


class LoginUser(APIView):

    def post(self, request):
        data = request.data
        # CustomUser.objects.get(email=data.get('email'))
        serializer = LoginUserSerializer(data=data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"Status": "Success", "Token": str(token), 'email': serializer.validated_data['email'], "user_type": user.user_type, "name": user.name}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors)


class StudentCreate(generics.CreateAPIView):
  queryset = Student.objects.all()
  serializer_class = StudentSerializer
  permission_classes = [IsAuthenticated]
  authentication_classes = [TokenAuthentication]

  def perform_create(self, serializer):
    serializer.save(ngo=self.request.user.ngo)


class StudentList(generics.ListAPIView):
  queryset = Student.objects.all()
  serializer_class = StudentSerializer
  permission_classes = [IsAuthenticated]
  authentication_classes = [TokenAuthentication]

  def get_queryset(self):
    if self.request.user.user_type == 1:
      return super().get_queryset().filter(ngo__user=self.request.user)
    elif self.request.user.user_type == 2:
      return super().get_queryset().filter(ngo__volunteer__user=self.request.user)
    elif self.request.user.user_type == 3:
      return super().get_queryset()
