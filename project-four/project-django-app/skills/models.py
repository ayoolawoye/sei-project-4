from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=50)
    price = models.PositiveIntegerField()
    image = models.CharField(max_length=300)

    def __str__(self):
        return f"{self.name} - {self.price}"
