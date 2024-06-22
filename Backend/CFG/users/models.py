from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone

USER_TYPE_CHOICES = (
    (1, 'PARTNER_NGO'),
    (2, 'VOLUNTEER'),
    (3, 'MAIN_OFFICE'),
)


class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None, is_staff=False, is_superuser=False):
        if not email:
            raise ValueError('Users must have an email address')
        now = timezone.localtime(timezone.now())
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            name=name,
            is_staff=is_staff,
            is_active=True,
            is_superuser=is_superuser,
            last_login=now,

        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, "superuser", password, True, True)
        user.admin = True
        user.save(using=self._db)
        return user
# Create your models here.


class CustomUser(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    user_type = models.PositiveSmallIntegerField(
        choices=USER_TYPE_CHOICES, default=1)

    USERNAME_FIELD = 'email'

    objects = UserManager()


class Student(models.Model):
    first_name = models.CharField(max_length=255, null=True, blank=True)
    middle_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    photograph = models.ImageField(
        upload_to='images/form-photo', null=True, blank=True)

    course_name = models.CharField(max_length=255, null=True, blank=True)
    course_duration = models.IntegerField(null=True, blank=True)
    current_year = models.IntegerField(null=True, blank=True)
    institute_name = models.CharField(max_length=255, null=True, blank=True)
    fathers_name = models.CharField(max_length=255, null=True, blank=True)
    mothers_name = models.CharField(max_length=255, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    number = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    education_financer_name = models.CharField(
        max_length=255, null=True, blank=True)
    income_proof = models.FileField(
        upload_to='files/income-proof', null=True, blank=True)
    govt_Scheme_name = models.CharField(max_length=255, null=True, blank=True)

    ngo = models.ForeignKey(
        'Ngo', on_delete=models.CASCADE, null=True, blank=True)
    is_approved = models.BooleanField(default=False)
    is_rejected = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Ngo(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    state = models.CharField(max_length=255, null=True, blank=True)
    volunteer = models.ForeignKey(
        'Volunteer', on_delete=models.CASCADE, null=True, blank=True)
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'{self.name} {self.city}'


class Volunteer(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField(null=True, blank=True)
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
