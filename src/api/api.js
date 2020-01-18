import axios from "axios";
const baseUrl = 'https://itc-crm-as10.herokuapp.com/api'  //'http://127.0.0.1:5000/api'



export function apiGetStudentsFromServer(id) {
   return axios.get(`${baseUrl}/students/` + id);
}

export function apiGetSkillsAndCoursesFromServer() {
   return axios.get(`${baseUrl}/getSkillsAndCourses`);
}

export function apiAddOrUpdateStudentInServer(student) {
   axios.post(`${baseUrl}/addOrUpdateStudent`, {
      student: student,
   })
      .then(function (response) {
         return response
      })
      .catch(function (error) {
         return error;
      });
   return axios.post(`${baseUrl}/addOrUpdateStudent`);
}

export function apiDeleteStudentFromServer(id) {
   axios.delete(`${baseUrl}/deleteStudent/` + id)
      .then(function (response) {
         window.location.href = '/';
         return response
      })
      .catch(function (error) {
         window.location.href = '/';
         return '>>' + error;
      });

}



