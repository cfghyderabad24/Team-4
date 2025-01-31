# Generated by Django 4.1 on 2024-06-22 19:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0005_rename_volunteer_ngo_volunteer_remove_student_age_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentFormA',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('current_fee', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('prev_edu_name', models.CharField(blank=True, max_length=100, null=True)),
                ('prev_edu_year', models.IntegerField(blank=True, null=True)),
                ('prev_edu_marks', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('prev_edu_percentage', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('father_name', models.CharField(blank=True, max_length=100, null=True)),
                ('father_age', models.IntegerField(blank=True, null=True)),
                ('father_edu_status', models.CharField(blank=True, max_length=100, null=True)),
                ('father_occup', models.CharField(blank=True, max_length=100, null=True)),
                ('father_income', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('total_earning', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('essay_file', models.FileField(blank=True, null=True, upload_to='essays/')),
                ('pan_card_file', models.FileField(blank=True, null=True, upload_to='pan_cards/')),
                ('aadhar_card_file', models.FileField(blank=True, null=True, upload_to='aadhar_cards/')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.student')),
            ],
        ),
    ]
