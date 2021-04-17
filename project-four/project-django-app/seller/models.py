from django.db import models


class Seller(models.Model):
    name = models.CharField(max_length=50)
    about_me = models.CharField(max_length=300)
    location = models.CharField(max_length=300)
    image = models.CharField(max_length=300)

    def __str__(self):
        return f"{self.name} - {self.location}"
