import pymongo
from pymongo import MongoClient
mongoConnection = MongoClient("mongodb+srv://zoz:ZoZ@cluster0-dwphz.mongodb.net/test?retryWrites=true&w=majority")
db = mongoConnection["as10crm"]
dbStudentsCollection = db['students']

# def insertAstudent(student):
#     dbStudentsCollection.insert_one(student)

# student1 = {
#          '_id': 'AeYSHpbaLYu8RqN9ZmZoQ9h4t3JwLAFr',
#          'first_name': 'zoz',
#          'last_name': 'sagi',
#          'created': '21-11-2020',
#          'updated': '22-11-2020',
#          'existing': {"16": 3, "2": 4, "3": 5},
#          'desired': {"2": 5, "7": 3, "9": 1},
#          'interested': [2, 1, 3],
#          'pic': 'https://image.flaticon.com/icons/svg/272/272077.svg',
# }
#
# student2 = {
#               '_id': 'AeYSHpbaLYu8RqN9ZmZoQ9h4t3Sdf',
#              'first_name': 'boni',
#              'last_name': 'dog',
#              'created': '21-11-2019',
#              'updated': '21-11-2019',
#              'existing': {"12": 3, "2": 4, "3": 5},
#              'desired': {"2": 4, "7": 3, "9": 1},
#              'interested': [2, 1, 3],
#              'pic': 'https://www.flaticon.com/premium-icon/icons/svg/806/806666.svg'
#             }

# print(dbCollection)


