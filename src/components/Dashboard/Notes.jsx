import React from 'react'
import { Link } from 'react-router-dom'

const Notes = () => {
  return (
    <div className="dashboard-box child-box-in-row"> 
						<div className="headline">
							<h3><i className="icon-material-outline-note-add"></i> Notes</h3>
						</div>	

						<div className="content with-padding">
							<div className="dashboard-note">
								<p>Meeting with candidate at 3pm who applied for Bilingual Event Support Specialist</p>
								<div className="note-footer">
									<span className="note-priority high">High Priority</span>
									<div className="note-buttons">
										<Link to="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></Link>
										<Link to="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></Link>
									</div>
								</div>
							</div>
							<div className="dashboard-note">
								<p>Extend premium plan for next month</p>
								<div className="note-footer">
									<span className="note-priority low">Low Priority</span>
									<div className="note-buttons">
										<Link to="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></Link>
										<Link to="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></Link>
									</div>
								</div>
							</div>
							<div className="dashboard-note">
								<p>Send payment to David Peterson</p>
								<div className="note-footer">
									<span className="note-priority medium">Medium Priority</span>
									<div className="note-buttons">
										<Link to="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></Link>
										<Link to="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></Link>
									</div>
								</div>
							</div>
						</div>
							<div className="add-note-button">
								<Link to="#small-dialog" className="popup-with-zoom-anim button full-width button-sliding-icon">Add Note <i className="icon-material-outline-arrow-right-alt"></i></Link>
							</div>
					</div>
  )
}

export default Notes