import json
from geopy.geocoders import Nominatim

from mountains.models import Location, Mountain


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
    # return resorts

# create_resort_json()
def create_location(location):
    new_location = Location (
        latitude=location.get('lat'),
        longitude=location.get('lng'),
        city = location.get('city'),
        state = location.get('state'),
        country = location.get('country'),
        code = location.get('country_code'),
    )
    return new_location



def generate_seed_file():
    f = open('resort_json.json')
    data = json.load(f)
    output = []
    for key, mountain in data.items():
        mountain_name = mountain.get('name')
        location = mountain.get('location')
        new_mountain = Mountain(
            name=mountain_name,
            location = create_location(location)
        )
        output.append(new_mountain)
    
    print(output)
    


generate_seed_file()
# print(resorts)