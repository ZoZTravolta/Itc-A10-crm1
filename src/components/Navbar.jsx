import React from "react";

class Navbar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
               Hogwarts CRM
            </a>
            <ul className="navbar-nav ml-3">
               <li className="nav-item active">
                  <a className="nav-link" href="/">
                     Home <span className="sr-only">(current)</span>
                  </a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="/createstudent">
                     Create new student
                  </a>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Navbar;
