from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    price = models.PositiveIntegerField()
    image = models.CharField(max_length=300)
    seller = models.ManyToManyField("seller.Seller", related_name="sellers")

    def __str__(self):
        return f"{self.name} - {self.price}"
