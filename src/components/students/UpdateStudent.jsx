import React from "react";
import { apiGetSkillsAndCoursesFromServer, apiaddNewStudentInServer, apiGetStudentsFromServer } from "../../api/api";
import CourseCheckbox from './CourseCheckbox'
import SelectSkills from '../students/SelectSkills'
import { withRouter } from "react-router-dom";

//? import { apiGetStudentsFromServer } from "../../api/api";

class CreateStudent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         student: [],
         Skills: [],
         studentFirstName: '',
         studentLastName: '',
         numOfSelect: [0],
         numOfSelectD: [0],
         student: {},
         existingList: {},
         desiredList: {},
         courses: [],
         Interested: [],
         interested_indexes: []
      };
   }

   async getSkillsAndCoursesFromServer() {
      try {
         const res = await apiGetSkillsAndCoursesFromServer();
         this.setState({ Skills: res.data['skills'] });
         this.setState({ courses: res.data['courses'] });
      } catch {
         console.log("error");
      }
   }


   async getStudentFromServer(id) {
      try {
         const res = await apiGetStudentsFromServer(id);
         const student = res.data["students"][0]
         this.setState({ student: student });
         this.setStudentInfo(student)
      } catch {
         console.log("error");
      }
   }
   setStudentInfo(student) {
      // console.log(student)
      this.setState({
         studentFirstName: student['first_name'],
         studentLastName: student['last_name'],
         interested_indexes: student['interested_indexes'],
         Interested: student['interested_indexes'],
         numOfSelect: student['existing'],
         numOfSelectD: student['desired'],
         exSkillsList: student['existing_indexes'],
         deSkillsList: student['desired_indexes'],
      }, () => { console.log(this.state) })

   }

   componentDidMount() {
      this.getSkillsAndCoursesFromServer();
      const url = window.location;
      const id = new URLSearchParams(url.search).get("id");
      this.getStudentFromServer(id);
   }




   handleChangeExistingSkillName(e) {
      let akey = e.target.id
      let avalue = e.target.value
      this.setState(prevState => {
         return {
            existingList: {
               ...prevState.existingList,
               [akey]: { ...prevState.existingList[akey], skill: avalue, level: "5" },
               // [akey]: { skill: avalue },
            }
         }
      }, () => console.log(this.state.existingList))
   }

   handleChangeExistingLevel(e) {
      let akey = e.target.dataset.skillRef
      let avalue = e.target.value
      this.setState(prevState => {
         return {
            existingList: {
               ...prevState.existingList,
               [akey]: { ...prevState.existingList[akey], level: avalue },
            }
         }
      }, () => console.log(this.state.existingList))
   }

   handleChangeDesiredSkillName(e) {
      let akey = e.target.id
      let avalue = e.target.value
      this.setState(prevState => {
         return {
            desiredList: {
               ...prevState.desiredList,
               [akey]: { ...prevState.desiredList[akey], skill: avalue, level: "5" },
               // [akey]: { skill: avalue },
            }
         }
      }, () => console.log(this.state.desiredList))
   }

   handleChangeDesiredLevel(e) {
      let akey = e.target.dataset.skillRef
      let avalue = e.target.value
      this.setState(prevState => {
         return {
            desiredList: {
               ...prevState.desiredList,
               [akey]: { ...prevState.desiredList[akey], level: avalue },
            }
         }
      }, () => console.log(this.state.desiredList))
   }

   handleCheckbox(e, isChecked) {
      let interested = this.state.interested_indexes
      let boxInt = e.target.value
      boxInt = parseInt(boxInt)
      if (isChecked && !this.state.interested_indexes.includes(boxInt))
         interested.push(parseInt(e.target.value))
      else {
         interested.pop(e.target.value)
      }
      this.setState({ Interested: interested })
   }

   handleSubmit() {

      let exSkillsList = {}
      const exSkills = Object.values(this.state.existingList)
      for (let exSkill of exSkills) {
         const key = Object.values(exSkill)[0]
         const val = Object.values(exSkill)[1]
         exSkillsList[key] = val
      }

      let deSkillsList = {}
      const deSkills = Object.values(this.state.desiredList)
      for (let deSkill of deSkills) {
         const key = Object.values(deSkill)[0]
         const val = Object.values(deSkill)[1]
         deSkillsList[key] = val
      }

      const student = { first_name: this.state.studentFirstName, "last_name": this.state.studentLastName, "existing": exSkillsList, "desired": deSkillsList, "interested": this.state.Interested }
      this.addNewStudentInServer(student)
   }

   render() {
      return (
         <div>
            <div className="jumbotron">
               <div className="container">
                  <h1 className="display-3">Update student</h1>
                  <p>welcom to...</p>
               </div>
            </div>
            <div className="container">
               <h3>Personal info</h3>
               <div className="row">
                  <div className="col-md-6 mb-3">
                     <label htmlFor="firstName">First name</label>
                     <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder={this.state.studentFirstName}
                        onChange={(e) => {
                           this.setState({ studentFirstName: e.target.value })
                        }}
                     />
                     <div className="invalid-feedback">
                        Valid first name is required.
                     </div>
                  </div>
                  <div className="col-md-6 mb-3">
                     <label htmlFor="lastName">Last name</label>
                     <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder={this.state.studentLastName}
                        required=""
                        onChange={(e) => {
                           this.setState({ studentLastName: e.target.value })
                        }}
                     />
                     <div className="invalid-feedback">
                        Valid last name is required.
                     </div>
                  </div>
               </div>
               <hr className="mb-4" />

               <div className="row">
                  <div className="col-md-12">
                     <h3>Existing Skills</h3>

                    
                     {this.state.Skills.length !== 0 && this.state.numOfSelect.map((iselect,index) => (
                        
                        <SelectSkills default={this.state.existingList[index]} key={iselect} iselect={iselect} selectedVal={null} Skills={this.state.Skills} handleChangeExistingSkillName={this.handleChangeExistingSkillName.bind(this)} handleChangeExistingLevel={this.handleChangeExistingLevel.bind(this)} />
                     ))}

{console.log(this.state.exSkillsList[0])}


                     <div className="row">
                        <div className="col-md-12">
                           <button className="btn btn-primary" onClick={() => {
                              let nums = [...this.state.numOfSelect]
                              let lastVal = nums[nums.length - 1]
                              nums.push(lastVal + 1)
                              this.setState({ numOfSelect: nums })
                           }}>Add another Skill</button>
                        </div>
                     </div>
                  </div>
               </div>

               <hr className="mb-4" />

               <div className="row">
                  <div className="col-md-12">
                     <h3>Desired Skills</h3>

                     {this.state.Skills.length !== 0 && this.state.numOfSelectD.map(iselect => (
                        <SelectSkills key={iselect} iselect={iselect} Skills={this.state.Skills} handleChangeExistingSkillName={this.handleChangeDesiredSkillName.bind(this)} handleChangeExistingLevel={this.handleChangeDesiredLevel.bind(this)} />
                     ))}


                     <div className="row">
                        <div className="col-md-12">
                           <button className="btn btn-primary" onClick={() => {
                              let nums = [...this.state.numOfSelectD]
                              let lastVal = nums[nums.length - 1]
                              nums.push(lastVal + 1)
                              this.setState({ numOfSelectD: nums })
                           }}>Add another Skill</button>
                        </div>
                     </div>
                  </div>

               </div>


               <hr className="mb-4" />

               <div className="row">
                  <div className="col-md-12">
                     <h3>Interested in courses</h3>
                  </div>

                  {this.state.interested_indexes.length !== 0 && this.state.courses.map((course, index) => (
                     <div key={course} className="col-md-12">
                        <CourseCheckbox Checked={this.state.interested_indexes.includes(index)} course={course} index={index} handleCheckbox={this.handleCheckbox.bind(this)} />
                     </div>
                  ))}
               </div>


               <hr className="mb-4" />

               <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  onClick={() => {
                     this.handleSubmit()
                  }}
               >
                  Add user!
               </button>


            </div>
         </div>
      );
   }

}

export default CreateStudent;


