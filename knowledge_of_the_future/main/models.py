from django.db import models
#from my_app.models import Contact

# Create your models here.
class Clients(models.Model):
    name = models.CharField(max_length=30)
    surename = models.CharField(max_length=30)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=20, null=True)

    class Meta:
        db_table = "clients"


class Quiz(models.Model):
    level = models.CharField(max_length=70)
    Theme = models.CharField(max_length=70)
    questions = models.CharField(max_length=500)
    quote = models.CharField(max_length=300, null=True)

    class Meta:
        db_table = "quiz"

# john = Clients.objects.create(
#     name="John",
#     surenamename="D",
#     email="john@example.com",
#     password = "202jjio0"
# )
# print(john)
# print(john.id)