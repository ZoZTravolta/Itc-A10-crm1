import React from "react";

class Navbar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
               Hogwarts CRM
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                     <a className="nav-link" href="/">
                        Home <span className="sr-only">(current)</span>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="/StudentsList">
                        Students list
                  </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="/addUpdateStudent">
                        Create new student
                  </a>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}

export default Navbar;
