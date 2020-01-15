import React from "react";
import { apiGetStudentsFromServer } from "../../api/api";
import Student from "./student";

class StudentsList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         students: []
      };
   }

   async getAllStudentsFromServer() {
      try {
         const res = await apiGetStudentsFromServer("all");
         this.setState({ students: res.data["students"] });
      } catch {
         console.log("error");
      }
   }

   componentDidMount() {
      this.getAllStudentsFromServer();
   }

   render() {
      return (
         <div>
            <div className="jumbotron">
               <div className="container">
                  <h1 className="display-3">Students list</h1>
               </div>
            </div>
            <div className="container">
               {this.state.students.length !== 0
                  ? this.state.students.map(student => {
                     return <Student key={student["id"]} student={student} />;
                  })
                  : null}
            </div>
         </div>
      );
   }
}

export default StudentsList;
