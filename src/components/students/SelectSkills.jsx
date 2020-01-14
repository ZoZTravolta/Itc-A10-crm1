import React from "react";

class SelectSkills extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <>
            <div className="col-md-3 mb-2">
               <label htmlFor=""> </label>
               <select
                  className="custom-select d-block w-100"
                  id={"existingSkill-" + this.props.iselect}
                  required=""
                  onChange={(e) => {
                     this.handleChangeExistingSkillName(e)
                  }}
               >
                  ><option value="">Choose...</option>
                  {this.props.Skills.map((skill, index) => (
                     <option value={index + 1} key={skill}>
                        {skill}
                     </option>
                  ))}
               </select>
            </div>
            <div className="col-md-3">
               <div className="mt-2"><small className="float-left">1</small><small className="float-right">5</small></div>
               <input
                  type="range"
                  className="custom-range"
                  id={"existingLevel-" + this.props.iselect}
                  data-skill-ref={"existingSkill-" + this.props.iselect}
                  max="5"
                  min="1"
                  onChange={(r) => {
                     this.handleChangeExistingLevel(r)
                  }}
               />
            </div>
         </>
      );
   }
}

export default SelectSkills;
