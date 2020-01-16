import React from "react";
import { apiDeleteStudentFromServer } from './../../api/api'
function Student(props) {
   let dateCreatedObj = new Date(props.student["created"] * 1000);
   let utcString = dateCreatedObj.toUTCString();
   let dateCreated = utcString.slice(0, -12);

   let dateUpdatedObj = new Date(props.student["updated"] * 1000);
   let utcStringU = dateUpdatedObj.toUTCString();
   let dateUpdated = utcStringU.slice(0, -12);

   const deleteStudentInServer = () => {
      apiDeleteStudentFromServer(props.student['id'])
   }

   return (



      <div className="col-md-6 d-flex StudentBox">
         <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
               <strong className="d-inline-block mb-2 text-primary">World</strong>
               <h3 className="mb-0">
                  <span className="text-dark" href="#">{props.student["first_name"]} {props.student["last_name"]}</span>
               </h3>
               <div className="mb-1 text-muted">Created: {dateCreated} | Updated: {dateUpdated}</div>
               <div style={{ width: "100%" }}>
                  <h5>Existing skills:</h5>
                  <ul className="skillsList">
                     {props.student["existing"].map(skill => {
                        return (
                           <li key={skill} >
                              <div className="">
                                 {skill[0]}
                              </div>
                              <div className="">
                                 <div className="progress" style={{ height: "10px" }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: parseInt(20 * skill[1]) + '%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                              </div>
                           </li>
                        );
                     })}
                  </ul>
                  <h5>Desired skills:</h5>
                  <ul className="skillsList">
                     {props.student["desired"].map(skill => {
                        return (
                           <li key={skill} >
                              <div className="">
                                 {skill[0]}
                              </div>
                              <div className="flex1">
                                 <div className="progress" style={{ height: "10px" }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: parseInt(20 * skill[1]) + '%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                              </div>
                           </li>
                        );
                     })}
                  </ul>
               </div>

               <div>
                  <h5>interested in: </h5>
                  {props.student["interested"].map(subject => {
                     return <span key={subject}>{subject}, </span>;
                  })}
               </div>
               <div className="buttons">
                  <a className="btn btn-primary edit" href={`addUpdateStudent/?id=${props.student["id"]}`} >
                     Edit Student
               </a>
                  <button className="btn btn-danger edit" onClick={() => {
                     deleteStudentInServer()
                  }} >
                     Delete Student
            </button>
               </div>
            </div>
         </div>
      </div>




   );
}

export default Student;
