

resorts = {}
def match_resorts_with_company():
    global resorts
    resorts_groups = open("resortsGroups.txt", 'r')
    prev = ''
    resort_company = None
    for index, line in enumerate(resorts_groups.readlines()): 
      
      line = line.rstrip()
      
      if (len(prev) == 0): resort_company = line
      name = line.split(',')[0]
      prev = name
      if len(line) and name != resort_company:
        resorts[name] = resort_company
          
    



def get_resort_names():
  resorts_location_file = open("resortsLocationRaw.txt", 'r')
  unmatched = []
  for index, line in enumerate(resorts_location_file.readlines()): 
    line_list = line.split(',')
    reformated = [line_item.strip('"') for line_item in line_list] # file needed quotes removed
    resort_name, _, latitude, longitude = reformated
    if (resorts.get(resort_name) == None): unmatched.append(resort_name)
  
  print(len(unmatched))
    

match_resorts_with_company()
get_resort_names()
