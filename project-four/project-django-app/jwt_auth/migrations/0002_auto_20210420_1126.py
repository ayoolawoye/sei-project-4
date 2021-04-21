# Generated by Django 3.2 on 2021-04-20 11:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('skills', '0003_auto_20210420_1126'),
        ('jwt_auth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='about_me',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='skills',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_skills', to='skills.skill'),
        ),
    ]