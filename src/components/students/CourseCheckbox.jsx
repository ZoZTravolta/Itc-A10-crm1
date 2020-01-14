import React from "react";

class CourseCheckbox extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isChecked: false
      };
   }

   render() {
      return (
         <div className="custom-control custom-checkbox mr-sm-2">
            <input type="checkbox"
               className="custom-control-input"
               id={this.props.course}
               value={this.props.index}
               onChange={(e) => {
                  if (this.state.isChecked === false) {
                     this.setState({ isChecked: true })
                  }
                  else {
                     this.setState({ isChecked: false })
                  }
                  this.props.handleCheckbox(e, !this.state.isChecked)
               }}
            />
            <label value={this.props.index + 1} key={this.props.course} className="custom-control-label" htmlFor={this.props.course}>{this.props.course}</label>
         </div>
      );
   }
}

export default CourseCheckbox;
