# Generated by Django 3.2.8 on 2021-10-30 08:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('animereview', '0002_review'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='anime',
            new_name='anime_id',
        ),
    ]
