from django.views.generic import CreateView
from django.views.generic import TemplateView
from django_ajax.mixin import AJAXMixin

from shoes.forms import ContactsForm


class Index(TemplateView):
    template_name = 'shoes/index.html'

    def get_context_data(self, **kwargs):
        context = super(Index, self).get_context_data(**kwargs)
        context['form'] = ContactsForm()
        return context


class ProcessForm(AJAXMixin, CreateView):
    form_class = ContactsForm

    def form_valid(self, form):
        self.object = form.save()
        return {'obj': self.object}

    def form_invalid(self, form):
        return form.errors.as_json(escape_html=True)

