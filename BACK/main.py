from flask import Flask, jsonify, request
from flask_cors import CORS  # cross_origin
import json
import time
from courses import COURSES
from skills import SKILLS
from mongo import dbStudentsCollection


import random
import string
def createRandomId():
    randomId = ''.join([random.choice(string.ascii_letters + string.digits) for n in range(32)])
    return randomId


app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return 'hi world'


@app.route("/api/students/<string:id>", methods=['GET'])
def get_students(id):
    iriteratorList = []
    studentsList = []
    DBLIST = []

    dbStudents = dbStudentsCollection.find({})
    for student in dbStudents:
        DBLIST.append(student)



    if id == 'all':
        iriteratorList = DBLIST
    else:
        for stu in DBLIST:
            if stu['id'] == str(id):
                iriteratorList.append(stu)


    for student in iriteratorList:
        existingList = []
        existing = student['existing']
        existingNames = list(existing.keys())
        existingLevels = list(existing.values())

        desiredList = []
        desired = student['desired']
        desiredNames = list(desired.keys())
        desiredLevels = list(desired.values())

        for index, skillKeys in enumerate(existingNames):

            skill = SKILLS(int(skillKeys))
            skillName = skill.name
            skillLevel = existingLevels[index]
            existingList.append((skillName, skillLevel))

        for index, skillKeys in enumerate(desiredNames):
            skill = SKILLS(int(skillKeys))
            skillName = skill.name
            skillLevel = desiredLevels[index]
            desiredList.append((skillName, skillLevel))

        interestedList = []
        for interested in student['interested']:
            interestedList.append(COURSES[int(interested)])

        theStudent = {'id': student['id'],
                      'first_name': student['first_name'],
                      'last_name': student['last_name'],
                      'created': student['created'],
                      'updated': student['updated'],
                      'existing': existingList,
                      'existing_indexes': student['existing'],
                      'desired': desiredList,
                      'desired_indexes': student['desired'],
                      'interested': interestedList,
                      'interested_indexes': student['interested'],
                      'pic': student['pic']
                      }

        studentsList.append(theStudent)
    return jsonify({'students': studentsList})


@app.route("/api/addOrUpdateStudent", methods=['POST'])
def add_or_update_student():

    data = request.get_json()
    timeNow = time.time()
    timeCreated = ''
    sId = ''

    if data != None:
        stu = data['student']
        DBSTUDENT = ''
        dbStudents = dbStudentsCollection.find({"id": stu['id']})
        for student in dbStudents:
             DBSTUDENT = student

        i = 0
        length = len(stu['interested'])
        while (i < length):
            if (stu['interested'][i] == 1001):
                stu['interested'].remove(stu['interested'][i])
                length = length - 1
                continue
            i = i + 1

        if not stu['id']:
            print('creating')
            sId = createRandomId()
            timeCreated = timeNow

        else:

            sId = stu['id']
            print('updating' , sId)
            timeCreated = DBSTUDENT['created']
            if DBSTUDENT['id'] == stu['id']:
                dbStudentsCollection.delete_one({"id": DBSTUDENT['id']})



        new_student = {
            "id": sId,
            "first_name": stu['first_name'],
            "last_name": stu['last_name'],
            "created": timeCreated,
            "updated": timeNow,
            "existing": stu['existing'],
            "desired": stu['desired'],
            "interested": stu['interested'],
            "pic": stu['pic']
        }

        dbStudentsCollection.insert_one(new_student)
        return 'hhh'


    return 'Success'


@app.route("/api/getSkillsAndCourses")
def get_skills():
    list_Of_skills = []
    for index in SKILLS:
        skill = SKILLS(index)
        list_Of_skills.append(skill.name)
    return json.dumps({"skills" :list_Of_skills , "courses": COURSES})

@app.route("/api/deleteStudent/<string:id>" , methods=['DELETE'])
def delete_student(id):
    dbStudentsCollection.delete_one({"id": id})



    return 'delete'

def startServer():
    app.run(debug=True)


if __name__ == "__main__":
    startServer()
