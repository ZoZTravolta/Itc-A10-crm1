from flask import Flask, jsonify, request
from flask_cors import CORS  # cross_origin
import json
import time
import uuid
from students import STUDENTS
from courses import COURSES
from skills import SKILLS

import random
import string
randomId = ''.join([random.choice(string.ascii_letters + string.digits) for n in range(32)])



app = Flask(__name__)
CORS(app)


@app.route("/api/students/<string:id>", methods=['GET'])
def get_students(id):
    iriteratorList = []
    studentsList = []
    if id == 'all':
        iriteratorList = STUDENTS
    else:
        for stu in STUDENTS:
            print(stu['id'])
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
                      'desired': desiredList,
                      'interested': interestedList
                      }
        studentsList.append(theStudent)
    return jsonify({'students': studentsList})


@app.route("/api/addNewStudent", methods=['POST'])
def add_new_student():
    data = request.get_json()
    if data != None:
        stu = data['student']


        new_student = {
                       "id": randomId,
                       "first_name": stu['first_name'],
                       "last_name": stu['last_name'],
                       "created": time.time(),
                       "updated": time.time(),
                       "existing": stu['existing'],
                       "desired": stu['desired'],
                       "interested": stu['interested']
                       }
        print(new_student)
        STUDENTS.append(new_student)
    return 'hi'
    # return jsonify([new_student])
    # return jsonify({'students': STUDENTS})


@app.route("/api/getSkillsAndCourses")
def get_skills():
    list_Of_skills = []
    for index in SKILLS:
        skill = SKILLS(index)
        list_Of_skills.append(skill.name)
    return json.dumps({"skills" :list_Of_skills , "courses": COURSES})


# @app.route("/api/getOneStudent/<string:id>", methods=['GET'] )
# def getOneStudent(id):
#     for student in STUDENTS:
#         if student['id'] == int(id):
#             return jsonify(student)
#         else:
#             return 'error'
#
#     # student = [student for student in STUDENTS if  STUDENTS['id'] == id]
#     # print(student)
#     # return student

# @app.route("/api/postNewStudent" , methods=['POST'])


def startServer():
    app.run(debug=True)


if __name__ == "__main__":
    startServer()
