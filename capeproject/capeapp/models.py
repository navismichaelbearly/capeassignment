from django.db import models

class Author(models.Model):
    first_name = models.CharField(max_length=100, default="")
    last_name = models.CharField(max_length=100, default="")

class Book(models.Model):
    authors = models.ManyToManyField(Author, related_name="books", blank=True)
    name = models.CharField(max_length=100, default="")
    price = models.IntegerField()
    published_on = models.DateTimeField(auto_now_add=True)
    created_on = models.DateTimeField(auto_now_add=True)
