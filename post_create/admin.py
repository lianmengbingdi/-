from django.contrib import admin

# Register your models here.
# post_create/admin.py
from django.contrib import admin
from .models import Post, Comment

admin.site.register(Post)
admin.site.register(Comment)
