import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StudentPage from './components/students/StudentPage'
import AddUpdateStudent from './components/students/AddUpdateStudent'
import StudentsList from './components/students/StudentsList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./assets/css/style.css"



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"} >
            <StudentsList />
          </Route>
          <Route path={"/studentPage"} >
            <StudentPage />
          </Route>
          <Route path={"/addUpdateStudent"} >
            <AddUpdateStudent />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
