from django.db import models


class Skill(models.Model):
    skill_name = models.CharField(max_length=50)
    skill_price = models.CharField(max_length=50)
    skill_image = models.CharField(max_length=300)

    def __str__(self):
        return f"{self.skill_name} - {self.skill_price}"
