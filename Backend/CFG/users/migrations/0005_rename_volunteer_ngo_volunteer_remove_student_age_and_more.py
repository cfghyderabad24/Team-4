# Generated by Django 4.1 on 2024-06-22 15:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_ngo_volunteer_student_ngo_volunteer_ngo_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ngo',
            old_name='Volunteer',
            new_name='volunteer',
        ),
        migrations.RemoveField(
            model_name='student',
            name='age',
        ),
        migrations.RemoveField(
            model_name='student',
            name='graduation_year',
        ),
        migrations.RemoveField(
            model_name='student',
            name='name',
        ),
        migrations.AddField(
            model_name='student',
            name='address',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='course_duration',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='course_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='current_year',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='education_financer_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='email',
            field=models.EmailField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='fathers_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='first_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='govt_Scheme_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='income_proof',
            field=models.FileField(blank=True, null=True, upload_to='files/income-proof'),
        ),
        migrations.AddField(
            model_name='student',
            name='institute_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='is_approved',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='student',
            name='is_rejected',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='student',
            name='last_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='middle_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='mothers_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='number',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='photograph',
            field=models.ImageField(blank=True, null=True, upload_to='images/form-photo'),
        ),
    ]
