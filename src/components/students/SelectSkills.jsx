import React from "react";

class SelectSkills extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <div key={this.props.iselect} className="row">
            <div className="col-md-6 mb-2">
               <label htmlFor=""> </label>
               <select
                  className="custom-select d-block w-100"
                  id={"existingSkill-" + this.props.iselect}
                  value = {this.props.default}
                  onChange={(e) => {
                     this.props.handleChangeExistingSkillName(e)
                  }}
               >
                  ><option value="">Choose...</option>
                  {this.props.Skills.map((skill, index) => (
                     <option value={index + 1} key={skill} selected={this.props.selectedVal === index ? "selected" : null}>
                        {skill}
                     </option>
                  ))}
               </select>
            </div>
            <div className="col-md-6">
               <div className="mt-2"><small className="float-left">1</small><small className="float-right">5</small></div>
               <input
                  type="range"
                  className="custom-range"
                  id={"existingLevel-" + this.props.iselect}
                  data-skill-ref={"existingSkill-" + this.props.iselect}
                  max="5"
                  min="1"
                  onChange={(r) => {
                     this.props.handleChangeExistingLevel(r)
                  }}
               />
            </div>
         </div>
      );
   }
}

export default SelectSkills;
