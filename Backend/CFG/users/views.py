from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from rest_framework import status
from rest_framework.authtoken.models import Token
from .serializers import *


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
