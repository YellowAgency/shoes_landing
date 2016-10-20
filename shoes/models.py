from django.db import models


class Contacts(models.Model):
    name = models.CharField(max_length=40)
    phone = models.CharField(max_length=18)
    seen = models.BooleanField(default=False)
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{} - {}'.format(self.name, self.phone)