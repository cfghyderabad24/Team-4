from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin
# Register your models here.
class CustomUserAdmin(UserAdmin):
  model = CustomUser
  list_display = ['email', 'is_superuser', 'is_active']
  fieldsets = (
    ("Primary", {'fields': ('email', 'password', 'user_type')}),
    ('Personal Info', {'fields': ('name',)}),
    ('Permissions', {'fields': ('is_superuser', 'is_active')}),
  )
  add_fieldsets = (
    (None, {
      'classes': ('wide',),
      'fields': ('email','name', 'password1', 'password2', 'is_superuser', 'is_active','user_type')}
    ),
  )
  search_fields = ('email',)
  ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)

admin.site.register(Student)
admin.site.register(Ngo)
admin.site.register(Volunteer)