import React from "react";

class SelectSkills extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         defaultLevel: this.props.defaultLevel,
         defaultOption: this.props.defaultOption
      };
   }

   handleChange(value) {
      this.setState({ defaultOption: value })
   }
   render() {
      return (
         <div key={this.props.iselect} className="row">
            <div className="col-md-6 mb-2">
               <label htmlFor=""> </label>
               <select
                  className="custom-select d-block w-100"
                  id={this.props.id + this.props.index}
                  value={this.state.defaultOption}
                  onChange={(e) => {
                     this.handleChange(e.target.value)
                     this.props.handleChangeSkillName(e)
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
                  id={this.props.id + this.props.iselect}
                  data-skill-ref={this.props.id + this.props.index}
                  max="5"
                  min="1"
                  value={this.state.defaultLevel}
                  onChange={(e) => {
                     this.setState({ defaultLevel: e.target.value })
                     this.props.handleChangeLevel(e)
                  }}
               />
            </div>
         </div>
      );
   }
}

export default SelectSkills;
