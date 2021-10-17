# Generated by Django 3.2.8 on 2021-10-16 22:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='mountain',
            name='website_link',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='mountain',
            name='id',
            field=models.CharField(max_length=120, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='mountain',
            name='location',
            field=models.CharField(blank=True, max_length=120),
        ),
        migrations.AlterField(
            model_name='mountain',
            name='name',
            field=models.CharField(default='SampleName', max_length=50),
        ),
    ]