import React from "react";

class Modal extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <>
            <div className="modal fade" id={`modal_${this.props.student["id"]}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Are you sure?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div className="modal-body">
                        You will delete {this.props.student["first_name"]} {this.props.student["last_name"]} from the list...
                     </div>
                     <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" onClick={() => {
                           this.props.deleteStudentInServer(this.props.student["id"])
                        }}>I'm sure</button>
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default Modal;
