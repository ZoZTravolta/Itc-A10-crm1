import React from "react";
import { apiDeleteStudentFromServer } from './../../api/api'
import Modal from '../Modal'


function Student(props) {
   let dateCreatedObj = new Date(props.student["created"] * 1000);
   let utcString = dateCreatedObj.toUTCString();
   let dateCreated = utcString.slice(0, -12);

   let dateUpdatedObj = new Date(props.student["updated"] * 1000);
   let utcStringU = dateUpdatedObj.toUTCString();
   let dateUpdated = utcStringU.slice(0, -12);

   const deleteStudentInServer = () => {
      apiDeleteStudentFromServer(props.student['id'])
      window.location.href = '/StudentsList';
   }

   return (



      <div className="col-md-12 StudentBox">
         <Modal student={props.student} deleteStudentInServer={deleteStudentInServer} />
         <div className="accordion" id={`accordionExample${props.student['id']}`}>
            <div className="card">
               <div className="card-header d-flex" id="headingOne">
                  <div className="d-flex flex1" data-toggle="collapse" data-target={`#collapse${props.student['id']}`}>
                     <img className="student-img" src={props.student.pic} alt={props.student.pic} />
                     <h2 className="mb-0">
                        <button className="btn btn-link btn-lg" type="button" data-toggle="collapse" data-target={`#collapse${props.student['id']}`} aria-expanded="true" aria-controls="collapseOne">
                           {props.student["first_name"]} {props.student["last_name"]}
                        </button>
                     </h2>
                  </div>
                  <div className="buttons">
                     <a className="btn btn-primary btn-sm" href={`addUpdateStudent/?id=${props.student["id"]}`} >
                        Edit Student
                     </a>
                     <button className="btn btn-danger btn-sm" data-toggle="modal" data-target="#exampleModalCenter" onClick={(e) => { e.stopPropagation() }} >
                        Delete Student
                     </button>
                  </div>
               </div>

               <div id={`collapse${props.student['id']}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                     <h3 className="mb-0">
                        <span className="text-primary" href="#">{props.student["first_name"]} {props.student["last_name"]}</span>
                     </h3>
                     <div className="mb-1 text-muted">Created: {dateCreated} | Updated: {dateUpdated}</div>
                     <hr className="mt-2" />
                     <div style={{ width: "100%" }}>
                        <h5 className="mt-4 mb-1">Existing skills:</h5>
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
                        <h5 className="mt-4 mb-1">Desired skills:</h5>
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
                        <h5 className="mt-4 mb-1">interested in: </h5>
                        {props.student["interested"].map(subject => {
                           return <span key={subject}>{subject}, </span>;
                        })}
                     </div>

                  </div>
               </div>
            </div>
         </div>



      </div>




   );
}

export default Student;
