import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StudentPage from './components/students/StudentPage'
import CreateStudent from './components/students/createStudent'
import Dashboard from './components/students/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./assets/css/style.css"



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"} >
            <Dashboard />
          </Route>
          <Route path={"/studentPage"} >
            <StudentPage />
          </Route>
          <Route path={"/CreateStudent"} >
            <CreateStudent />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
