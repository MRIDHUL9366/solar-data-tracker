from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def about_page(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'about.html')


def admin_register(request):
    return render(request, 'about.html')

