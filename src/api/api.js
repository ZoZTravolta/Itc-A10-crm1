import axios from "axios";
const baseUrl = 'http://127.0.0.1:5000/api'//"https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet";



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
         return response
      })
      .catch(function (error) {
         return error;
      });
   // return axios.delete(`${baseUrl}/deleteStudent`);
}




// export function deleteProduct(productId) {
//     return axios.delete(`${baseUrl}/products/${productId}`);
// }
// export function apiAddTweetToServer(userName, content, date) {
//    return axios.post(`${baseUrl}`, { tweet: { content: content, userName: userName, date: date } });
// }