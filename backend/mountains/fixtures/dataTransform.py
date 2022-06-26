from audioop import add
import json
from typing import get_origin
from geopy.geocoders import Nominatim






geolocator = Nominatim(user_agent="shredder")
def get_location_data(lat, long):

    location = geolocator.reverse(lat+ ','+long)
    address = location.raw['address']

    county = address.get('county', '')
    city = address.get('city', county)
    state = address.get('state', '')
    country = address.get('country', '')
    code = address.get('country_code')
    return {'lat': lat, 'lng': long, 
        'state': state, 'city': city,
        'country': country, 'country_code': code}


def create_resort_json():
    resorts_location_filename = "resortsLocationRaw.txt"
    resorts_location_file = open(resorts_location_filename, 'r')
    resorts = {}
    for index, line in enumerate(resorts_location_file.readlines()): 
        if (index < 5): #limit content
            line_list = line.split(',')
            reformated = [line_item.strip('"') for line_item in line_list] # file needed quotes removed
            resort_name, _, latitude, longitude = reformated
            longitude = longitude.rstrip('"\n')
            location = get_location_data(latitude, longitude)
            resorts[resort_name] = { 'name': resort_name, 'location' : location}


    resort_json = open('resort_json.json', 'w')
    json.dump(resorts, resort_json)

create_resort_json()
# print(resorts)