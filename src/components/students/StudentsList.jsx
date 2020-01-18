import React from "react";
import { apiGetStudentsFromServer } from "../../api/api";
import Student from "./Student";
import PieChart from '../charts/PieChart'
import LineChart from '../charts/LineChart'

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
         <div className="content">
            <div className="jumbotron">
               <div className="container">
                  <h1 className="display-3">Students list</h1>
               </div>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-md-8 StudentBox">
                     {this.state.students.length !== 0
                        ? this.state.students.map(student => {
                           return (
                              <Student key={student["id"]} student={student} />
                           );
                        })
                        : null}
                  </div>
                  <div className="col-md-4">
                     <h5 className="">Existing skills of all students</h5>
                     {this.state.students.length > 0 &&
                        <PieChart students={this.state.students} />
                     }
                     <h5 className="mt-5">interested lessons</h5>
                     {this.state.students.length > 0 &&
                        <LineChart students={this.state.students} />
                     }

                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default StudentsList;
