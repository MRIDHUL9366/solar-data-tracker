from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about_page',views.about_page,name='about_page'),

]
