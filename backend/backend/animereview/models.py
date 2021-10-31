from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator, MinValueValidator


class User(AbstractUser):
    '''
        Inherting User model of auth.models, we might change current fields of User later.
    '''
    pass


class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    anime_id = models.CharField(max_length=255)
    rating = models.IntegerField(default=0, validators=[
                                 MinValueValidator(1), MaxValueValidator(5)])
    description = models.TextField()

    def __str__(self):
        return self.anime
