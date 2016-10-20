from django import forms

from shoes.models import Contacts


class ContactsForm(forms.ModelForm):
    class Meta:
        model = Contacts
        fields = ['name', 'phone']