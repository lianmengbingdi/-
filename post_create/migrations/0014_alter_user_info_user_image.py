# Generated by Django 4.2.5 on 2023-10-26 05:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post_create', '0013_remove_user_fav_id_alter_user_fav_user_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_info',
            name='user_image',
            field=models.ImageField(blank=True, default='.user_images/default_user_image.jpg', null=True, upload_to='user_images/'),
        ),
    ]
