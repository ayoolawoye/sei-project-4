# Generated by Django 3.2 on 2021-04-15 10:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('skills', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='skill',
            old_name='skillImage',
            new_name='skill_image',
        ),
        migrations.RenameField(
            model_name='skill',
            old_name='skillName',
            new_name='skill_name',
        ),
        migrations.RenameField(
            model_name='skill',
            old_name='skillPrice',
            new_name='skill_price',
        ),
    ]
