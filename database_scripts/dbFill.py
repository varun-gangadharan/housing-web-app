"""
 * @file dbFill.py
 * Used in CS498RK MP4 to populate database with randomly generated users and tasks.
 *
 * @author Aswin Sivaraman
 * @date Created: Spring 2015
 * @date Modified: Spring 2015
 * @date Modified: Spring 2019
"""

import sys
import getopt
import http.client
import urllib
import json
from random import randint
from random import choice
from datetime import date
from time import mktime

def usage():
    print('dbFill.py -u <baseurl> -p <port> -n <numUsers> -t <numTasks>')

def getUsers(conn):
    # Retrieve the list of users
    conn.request("GET","""/api/users?filter={"_id":1}""")
    response = conn.getresponse()
    data = response.read()
    d = json.loads(data)

    # Array of user IDs
    users = [str(d['data'][x]['_id']) for x in range(len(d['data']))]

    return users

def getAmenities():
    #Create a random set of enumerated numbers
    result = []
    for i in range(randint(1, 10)):
        amenity = randint(0, 10)
        if amenity in result:
            continue
        else:
            result.append(amenity)
    return result

def getUtilities():
    #Create a random set of enumerated numbers
    result = []
    for i in range(randint(1, 5)):
        amenity = randint(0, 5)
        if amenity in result:
            continue
        else:
            result.append(amenity)
    return result

def getPolicies():
    #Create a random set of enumerated numbers
    result = []
    for i in range(randint(1, 20)):
        amenity = randint(0, 20)
        if amenity in result:
            continue
        else:
            result.append(amenity)
    return result


def main(argv):

    # Server Base URL and port
    baseurl = "localhost"
    port = 4000

    # Number of POSTs that will be made to the server
    userCount = 50
    listingCount = 200

    try:
        opts, args = getopt.getopt(argv,"hu:p:n:t:",["url=","port=","users=","tasks="])
    except getopt.GetoptError:
        usage()
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
             usage()
             sys.exit()
        elif opt in ("-u", "--url"):
             baseurl = str(arg)
        elif opt in ("-p", "--port"):
             port = int(arg)
        elif opt in ("-n", "--users"):
             userCount = int(arg)
        elif opt in ("-t", "--tasks"):
             listingCount = int(arg)

    # Python array containing common first names and last names
    firstNames = ["james","john","robert","michael","william","david","richard","charles","joseph","thomas","christopher","daniel","paul","mark","donald","george","kenneth","steven","edward","brian","ronald","anthony","kevin","jason","matthew","gary","timothy","jose","larry","jeffrey","frank","scott","eric","stephen","andrew","raymond","gregory","joshua","jerry","dennis","walter","patrick","peter","harold","douglas","henry","carl","arthur","ryan","roger","joe","juan","jack","albert","jonathan","justin","terry","gerald","keith","samuel","willie","ralph","lawrence","nicholas","roy","benjamin","bruce","brandon","adam","harry","fred","wayne","billy","steve","louis","jeremy","aaron","randy","howard","eugene","carlos","russell","bobby","victor","martin","ernest","phillip","todd","jesse","craig","alan","shawn","clarence","sean","philip","chris","johnny","earl","jimmy","antonio","danny","bryan","tony","luis","mike","stanley","leonard","nathan","dale","manuel","rodney","curtis","norman","allen","marvin","vincent","glenn","jeffery","travis","jeff","chad","jacob","lee","melvin","alfred","kyle","francis","bradley","jesus","herbert","frederick","ray","joel","edwin","don","eddie","ricky","troy","randall","barry","alexander","bernard","mario","leroy","francisco","marcus","micheal","theodore","clifford","miguel","oscar","jay","jim","tom","calvin","alex","jon","ronnie","bill","lloyd","tommy","leon","derek","warren","darrell","jerome","floyd","leo","alvin","tim","wesley","gordon","dean","greg","jorge","dustin","pedro","derrick","dan","lewis","zachary","corey","herman","maurice","vernon","roberto","clyde","glen","hector","shane","ricardo","sam","rick","lester","brent","ramon","charlie","tyler","gilbert","gene"]
    lastNames = ["smith","johnson","williams","jones","brown","davis","miller","wilson","moore","taylor","anderson","thomas","jackson","white","harris","martin","thompson","garcia","martinez","robinson","clark","rodriguez","lewis","lee","walker","hall","allen","young","hernandez","king","wright","lopez","hill","scott","green","adams","baker","gonzalez","nelson","carter","mitchell","perez","roberts","turner","phillips","campbell","parker","evans","edwards","collins","stewart","sanchez","morris","rogers","reed","cook","morgan","bell","murphy","bailey","rivera","cooper","richardson","cox","howard","ward","torres","peterson","gray","ramirez","james","watson","brooks","kelly","sanders","price","bennett","wood","barnes","ross","henderson","coleman","jenkins","perry","powell","long","patterson","hughes","flores","washington","butler","simmons","foster","gonzales","bryant","alexander","russell","griffin","diaz","hayes"]
    phoneNumbers = []
    for i in range(userCount):
        phoneNumbers.append(randint(0,9999999999))
    # Server to connect to (1: url, 2: port number)
    conn = http.client.HTTPConnection(baseurl, port)

    # HTTP Headers
    headers = {"Content-type": "application/x-www-form-urlencoded","Accept": "text/plain"}

    # Array of user IDs
    userFirsts = []
    userLasts = []
    userEmails = []
    userPhones = []
    userPasswords = []

    # Loop 'userCount' number of times
    for i in range(userCount):

        # Pick a random first name and last name
        x = randint(0,99)
        y = randint(0,99)
        z = randint(0,99)
        params = urllib.parse.urlencode({'first_name': firstNames[x],  'last_name': lastNames[y], 'email': firstNames[x] + "@" + lastNames[y] + ".com", 'phone': phoneNumbers[z], 'password': "test"})

        # POST the user
        conn.request("POST", "/api/users", params, headers)
        response = conn.getresponse()
        data = response.read()
        d = json.loads(data)

        # Store the users id
        userFirsts.append(str(d['data']['first_name']))
        userLasts.append(str(d['data']['last_name']))
        userEmails.append(str(d['data']['email']))
        userPhones.append(str(d['data']['phone']))
        userPasswords.append(str(d['data']['password']))

    # Open 'tasks.txt' for sample street names
    f = open('tasks.txt','r')
    streetNames = f.read().splitlines()
    directions = ["N", "S", "E", "W"]

    # Loop 'listingCount' number of times
    for i in range(listingCount):

        # Randomly generate task parameters
        description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        params = urllib.parse.urlencode({'price': randint(1000, 2000), 'location': str(randint(100, 1999)) + " " + directions[randint(0,3)] + " " + streetNames[randint(0, len(streetNames) - 1)], 'bedrooms': randint(1,6), 'bathrooms': randint(1,3), 'utilities': getUtilities(), 'amenities': getAmenities(), 'squareFootage': randint(1000, 4000), 'company': randint(0, 10), 'policies': getPolicies(), 'housingType': randint(0,3), 'vacancy': bool(randint(0,1)), 'picture': "???"})

        # POST the listing
        conn.request("POST", "/api/tasks", params, headers)
        response = conn.getresponse()
        data = response.read()
        d = json.loads(data)

    # Exit gracefully
    conn.close()
    print(str(userCount)+" users and "+str(listingCount)+" tasks added at "+baseurl+":"+str(port))

if __name__ == "__main__":
     main(sys.argv[1:])
