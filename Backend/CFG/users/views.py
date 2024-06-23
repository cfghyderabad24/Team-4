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
        return serializer.save(ngo=self.request.user.ngo)


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


class StudentPendingList(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        qset = super().get_queryset().filter(is_approved=False, is_rejected=False)
        # if self.request.user.user_type == 1:
        #     return qset.filter(level=1, ngo__user=self.request.user)
        if self.request.user.user_type == 2:
            return qset.filter(level=2, ngo__volunteer__user=self.request.user)
        elif self.request.user.user_type == 3:
            return qset.filter(level=3)


class StudentApprove(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get(self, request, pk):
        resp = request.data.get('response')
        student = Student.objects.get(id=pk)
        if resp=="False":
            student.is_rejected = True
            student.save()
            return Response({"status": "success", "data": StudentSerializer(student).data})
        elif resp=="True":
            print("here1", student)
            if (student.level == 1):
                student.level = 2
            elif (student.level == 2):
                student.level = 3
            elif (student.level == 3):
                student.is_approved = True
                print("here")
                student.level = 4
            student.save()
        else :
            return Response({"status": "failed", "message": "Invalid response"})
        return Response({"status": "success", "data": StudentSerializer(student).data})
