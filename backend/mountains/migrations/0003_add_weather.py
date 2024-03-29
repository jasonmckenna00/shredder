# Generated by Django 3.2.8 on 2022-10-13 03:06

from django.db import migrations, models
import django.db.models.deletion
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('mountains', '0002_modified_location_resorts'),
    ]

    operations = [
        migrations.CreateModel(
            name='Weather',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('temperature', models.IntegerField(blank=True)),
                ('snow', models.JSONField(blank=True, default=dict)),
                ('feels_like', models.IntegerField(blank=True)),
                ('humidity', models.IntegerField(blank=True)),
                ('visibility', models.IntegerField(blank=True)),
                ('wind_speed', models.IntegerField(blank=True)),
                ('wind_deg', models.IntegerField(blank=True)),
                ('weather_code', models.IntegerField(blank=True)),
                ('weather_main', models.CharField(blank=True, max_length=28)),
                ('weather_description', models.CharField(blank=True, max_length=28)),
                ('weather_icon', models.CharField(blank=True, max_length=5)),
                ('forecast', jsonfield.fields.JSONField(blank=True, default=list)),
                ('last_updated', models.DateTimeField(blank=True)),
            ],
        ),
        migrations.AddField(
            model_name='mountain',
            name='weather',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='mountains.weather'),
        ),
    ]
