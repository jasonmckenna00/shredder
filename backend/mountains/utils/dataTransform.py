import json
from geopy.geocoders import Nominatim
import uuid
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
    country = address.get('country', '')
    code = address.get('country_code')
    return {'latitude': lat, 'longitude': long, 
        'state': state, 'city': city,
        'country': country, 'country_code': code}


def create_resort_json():
    resorts_location_filename = "resortsLocationRaw.txt"
    resorts_location_file = open(resorts_location_filename, 'r')
    resorts = []
    locs = []
    for index, line in enumerate(resorts_location_file.readlines()): 
        if (index < 5): #limit content
            line_list = line.split(',')
            reformated = [line_item.strip('"') for line_item in line_list] # file needed quotes removed
            resort_name, _, latitude, longitude = reformated
            longitude = longitude.rstrip('"\n')
            location = get_location_data(latitude, longitude)
            locs.append(location)
            resorts.append({ 'name': resort_name, 'location' : location})


    resort_json = open('resort_json.json', 'w')
    # locs_list = open('locs_list.json', 'w')
    # json.dump(locs, locs_list)
    json.dump(resorts, resort_json)
    # return resorts

create_resort_json()


def generate_seed_file():
    f = open('resort_json.json')
    data = json.load(f)
    seed = []
    
    resort_obj = {
      'model': "mountains.resortcompany",
      "pk": 1,
      "fields": {
        'company_name': "EPIC",
        "website_link": "https://www.epicpass.com/"
      }
    }
    seed.append(resort_obj)
    
    location_count = 1
    mountain_count = 1
    for mountain in data: 
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
            "resort_company": 1
        }
      }
      location_count += 1
      mountain_count += 1
      
      
      seed.append(mountain_obj)
      new_seed = open('new_seed.json', 'w')
      json.dump(seed, new_seed)
      
      
      
      
      # locat = Location.objects.create(mountain.location)
      # resort_company = ResortCompany.objects.get(company_name='EPIC')
      # mountain = Mountain.objects.create(location = locat,  resort_company= resort_company)
#     for key, mountain in data.items():
#         mountain_name = mountain.get('name')
#         location = mountain.get('location')
#         new_mountain = Mountain(
#             name=mountain_name,
#             location = create_location(location)
#         )
#         output.append(new_mountain)


generate_seed_file()

# def create_location(location):
#     loc = {
      
#     }
#         latitude=location.get('lat'),
#         longitude=location.get('lng'),
#         city = location.get('city'),
#         state = location.get('state'),
#         country = location.get('country'),
#         country_code = location.get('country_code'),
    
#     return new_location



# def generate_seed_file():
#     f = open('resort_json.json')
#     data = json.load(f)
#     output = []
#     for key, mountain in data.items():
#         mountain_name = mountain.get('name')
#         location = mountain.get('location')
#         new_mountain = Mountain(
#             name=mountain_name,
#             location = create_location(location)
#         )
#         output.append(new_mountain)
    
#     print(output)
    

# special DeserializedObject instances that wrap a created – but unsaved – object and any associated relationship data.
# Calling DeserializedObject.save() saves the object to the database





# generate_seed_file()
# print(resorts)