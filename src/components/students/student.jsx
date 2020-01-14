import React from "react";

function Student(props) {
   let dateCreatedObj = new Date(props.student["created"] * 1000);
   let utcString = dateCreatedObj.toUTCString();
   let dateCreated = utcString.slice(0, -12);

   let dateUpdatedObj = new Date(props.student["updated"] * 1000);
   let utcStringU = dateUpdatedObj.toUTCString();
   let dateUpdated = utcStringU.slice(0, -12);

   return (
      <div className="Student box">
         <div>{props.student["id"]}</div>
         <div>{props.student["first_name"]}</div>
         <div>{props.student["last_name"]}</div>
         <div>{dateCreated}</div>
         <div>{dateUpdated}</div>
         <div>
            Existing skills:
            <ul>
               {props.student["existing"].map(skill => {
                  return (
                     <li key={skill}>
                        {skill[0]} level: {parseInt(100 / skill[1])}%,
                     </li>
                  );
               })}
            </ul>
         </div>
         <div>
            Desired skills:
            <ul>
               {props.student["desired"].map(skill => {
                  return (
                     <li key={skill}>
                        {skill[0]} level: {parseInt(100 / skill[1])}%,
                     </li>
                  );
               })}
            </ul>
         </div>
         <div>
            <span>interested in: </span>
            {props.student["interested"].map(subject => {
               return <span key={subject}>{subject}, </span>;
            })}
         </div>
         <div>
            <a
               className="btn edit"
               href={`UpdateStudent/?id=${props.student["id"]}`}
            >
               Edit Student
            </a>
         </div>
      </div>
   );
}

export default Student;
