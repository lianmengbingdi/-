# Generated by Django 4.2.5 on 2023-10-25 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("post_create", "0006_post_author"),
    ]

    operations = [
        migrations.AddField(
            model_name="comment",
            name="nickname",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name="post",
            name="nickname",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
