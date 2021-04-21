from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_image = models.ImageField(upload_to="images/user/")
    about_me = models.CharField(max_length=500, null=True)
    skills = models.ForeignKey(
        "skills.Skill",
        related_name="user_skills",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
