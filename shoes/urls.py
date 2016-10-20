from django.conf.urls import url

from . import views

app_name = 'shoes'
urlpatterns = [
    url(r'^$', views.Index.as_view(), name='index'),
    url('^process/$', views.ProcessForm.as_view(), name='process'),
    url(r'shoes\.ru\.html/$', views.TemplateView.as_view(template_name='shoes/wo_sign.html'), name='wo_sign'),
]
