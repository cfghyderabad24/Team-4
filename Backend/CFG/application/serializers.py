from rest_framework import serializers
from .models import StudentFormA

class StudentFormASerializer(serializers.ModelSerializer):
  class Meta:
    model = StudentFormA
    fields = '__all__'