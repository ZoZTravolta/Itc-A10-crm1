import React from "react";
import { apiGetStudentsFromServer } from "../../api/api";
import { withRouter } from "react-router-dom";

class StudentPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = { students: [] };
   }

   async getStudentFromServer(id) {
      try {
         const res = await apiGetStudentsFromServer(id);
         this.setState({ students: res.data["students"][0] });
         console.log(res.data["students"][0])
      } catch {
         console.log("error");
      }
   }

   componentDidMount() {
      const url = this.props.location;
      const id = new URLSearchParams(url.search).get("id");
      this.getStudentFromServer(id);
   }

   render() {
      return (
         <div>
            {this.state.students.length !== 0 && (
               <div className="jumbotron">
                  <div className="container">
                     <h1 className="display-3">
                        {this.state.students["first_name"]}{" "}
                        {this.state.students["last_name"]}
                     </h1>
                     <p>welcom to...</p>
                  </div>
               </div>
            )}
         </div>
      );
   }
}

export default withRouter(StudentPage);
