from django.contrib import admin

from shoes.models import Contacts


class ContactsAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'creation_date', 'seen']
    ordering = ['creation_date']


admin.site.register(Contacts, ContactsAdmin)
