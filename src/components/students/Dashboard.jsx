import React from "react";
import { apiGetStudentsFromServer } from "../../api/api";
import PieChart from '../charts/PieChart'

class Dashboard extends React.Component {
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
            <h1>Dashboard</h1>
            <PieChart />
            {/* <div className="jumbotron">
               <div className="container">
                  <h1 className="display-3">Dashboard</h1>
                  <p>welcom to...</p>
               </div>
            </div>
            <div className="container">
               {this.state.students.length !== 0
                  ? this.state.students.map(student => {
                       return <Student key={student["id"]} student={student} />;
                    })
                  : null}
            </div> */}
         </div>
      );
   }
}

export default Dashboard;
