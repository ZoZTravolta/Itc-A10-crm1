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
def createRandomId():
    randomId = ''.join([random.choice(string.ascii_letters + string.digits) for n in range(32)])
    return randomId


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
                      'existing_indexes': student['existing'],
                      'desired': desiredList,
                      'desired_indexes': student['desired'],
                      'interested': interestedList,
                      'interested_indexes': student['interested']
                      }
        studentsList.append(theStudent)
    return jsonify({'students': studentsList})


@app.route("/api/addOrUpdateStudent", methods=['POST'])
def add_or_update_student():
    data = request.get_json()
    sId = ''

    if data != None:

        stu = data['student']

        if not stu['id']:
            sId = createRandomId()
            if 1001 in stu['interested']:
                stu['interested'].remove(1001)

        else:
            sId = stu['id']
            for index , student  in enumerate(STUDENTS):
                if stu['id'] == student['id']:
                    STUDENTS.pop(index)

        new_student = {
            "id": sId,
            "first_name": stu['first_name'],
            "last_name": stu['last_name'],
            "created": time.time(),
            "updated": time.time(),
            "existing": stu['existing'],
            "desired": stu['desired'],
            "interested": stu['interested']
        }
        # print(new_student)
        STUDENTS.append(new_student)

            # if stu['id'] in STUDENTS['id']:
            #     print (stu)

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
