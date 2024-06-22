from django.db import models
from users.models import *

# Create your models here.

class StudentFormA(models.Model):
  student = models.ForeignKey(Student, on_delete=models.CASCADE)
  current_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
  prev_edu_name = models.CharField(max_length=100, null=True, blank=True)
  prev_edu_year = models.IntegerField(null=True, blank=True)
  prev_edu_marks = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
  prev_edu_percentage = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)

  father_name = models.CharField(max_length=100, null=True, blank=True)
  father_age = models.IntegerField(null=True, blank=True)
  father_edu_status = models.CharField(max_length=100, null=True, blank=True)
  father_occup = models.CharField(max_length=100, null=True, blank=True)
  father_income = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
  total_earning = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

  # NGO Details
  essay_file = models.FileField(upload_to='essays/', null=True, blank=True)
  pan_card_file = models.FileField(upload_to='pan_cards/', null=True, blank=True)
  aadhar_card_file = models.FileField(upload_to='aadhar_cards/', null=True, blank=True)


