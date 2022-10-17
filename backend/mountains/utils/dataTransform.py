import json
from geopy.geocoders import Nominatim
import uuid
from state_codes import us_state_to_abbrev
# from .models import Location, Mountain, ResortCompany
# import models

# from backend.mountains.models import Location, Mountain

# from mountains.models import Location, Mountain


geolocator = Nominatim(user_agent="shredder")
def get_location_data(lat, long):
    
    location = geolocator.reverse(lat+ ','+long)
    address = location.raw['address']
    county = address.get('county', '')
    city = address.get('city', county)
    state = address.get('state', '')
    state_code = us_state_to_abbrev[state] if state in us_state_to_abbrev else ""
    country = address.get('country', '')
    code = address.get('country_code')
    return {'latitude': lat, 'longitude': long, 
        'state': state, 'state_code': state_code,
        'city': city,
        'country': country, 'country_code': code}


def create_resort_json():
    resorts_location_filename = "resortsLocationRaw.txt"
    resorts_location_file = open(resorts_location_filename, 'r')
    resorts = []
    locs = []
    for index, line in enumerate(resorts_location_file.readlines()): 
        if (index < 20): #limit content
            line_list = line.split(',')
            reformated = [line_item.strip('"') for line_item in line_list] # file needed quotes removed
            resort_name, _, latitude, longitude = reformated
            longitude = longitude.rstrip('"\n')
            location = get_location_data(latitude, longitude)
            locs.append(location)
            resorts.append({ 'name': resort_name, 'location' : location})


    resort_json = open('resort_locations.json', 'w')
    json.dump(resorts, resort_json)

create_resort_json()


def generate_seed_file():

    f = open('resort_locations.json')
    location_data = json.load(f)
    seed = []
    
    resort_obj = {
      'model': "mountains.resortcompany",
      "pk": 1,
      "fields": {
        'company_name': "EPIC",
        "website_link": "https://www.epicpass.com/"
      }
    }
    f = open('weather_template.json')
    weather_obj = json.loads(f.read())
    seed.append(weather_obj[0])
        
    seed.append(resort_obj)
    
    location_count = 1
    mountain_count = 1
    for mountain in location_data: 
      location_obj = {
        'model': "mountains.location",
        "pk": location_count,
        "fields": mountain.get('location')
      }
      seed.append(location_obj)
      mountain_obj = {
        "model": "mountains.mountain",
        "pk": mountain_count,
        "fields": {
            "name": mountain.get('name'),
            "website_link": "",
            "location": location_count,
            "resort_company": 1,
            "weather": 1
        }
      }
      location_count += 1
      mountain_count += 1
      
      
      seed.append(mountain_obj)
      new_seed = open('new_seed_weather.json', 'w')
      json.dump(seed, new_seed)
      
      
      


generate_seed_file()
