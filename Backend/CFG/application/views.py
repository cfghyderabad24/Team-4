from django.shortcuts import render
from rest_framework import generics
from .models import StudentFormA
from .serializers import StudentFormASerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from users.models import Student

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class StudentFormAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get(self, request, pk, format=None):
        try:
            student = Student.objects.get(id=pk)
            student_forms = StudentFormA.objects.filter(student=student)
            serializer = StudentFormASerializer(student_forms, many=True)
            return Response(serializer.data)
        except Student.DoesNotExist:
            raise Http404


class StudentFormCreateAPIView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    queryset = StudentFormA.objects.all()
    serializer_class = StudentFormASerializer

    def post(self, request, *args, **kwargs):
        request.data['student'] = self.kwargs['pk'];
        return super().post(request, *args, **kwargs)

    # def perform_create(self, serializer):
    #   student = Student.objects.get(id=self.kwargs['id'])
    #   serializer.save(student=student)