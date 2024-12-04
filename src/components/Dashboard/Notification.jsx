import React from 'react'
import { Link } from 'react-router-dom'

const Notification = () => {
  return (
    <div className="dashboard-box">
						<div className="headline">
							<h3><i className="icon-material-baseline-notifications-none"></i> Notifications</h3>
							<button className="mark-as-read ripple-effect-dark" data-tippy-placement="left" title="Mark all as read">
									<i className="icon-feather-check-square"></i>
							</button>
						</div>
						<div className="content">
							<ul className="dashboard-box-list">
								<li>
									<span className="notification-icon"><i className="icon-material-outline-group"></i></span>
									<span className="notification-text">
										<strong>Michael Shannah</strong> applied for a job <Link to="#">Full Stack Software Engineer</Link>
									</span>
									<div className="buttons-to-right">
										<Link to="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></Link>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className=" icon-material-outline-gavel"></i></span>
									<span className="notification-text">
										<strong>Gilber Allanis</strong> placed a bid on your <Link to="#">iOS App Development</Link> project
									</span>
									<div className="buttons-to-right">
										<Link to="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></Link>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className="icon-material-outline-autorenew"></i></span>
									<span className="notification-text">
										Your job listing <Link to="#">Full Stack Software Engineer</Link> is expiring
									</span>
									<div className="buttons-to-right">
										<Link to="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></Link>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className="icon-material-outline-group"></i></span>
									<span className="notification-text">
										<strong>Sindy Forrest</strong> applied for a job <Link to="#">Full Stack Software Engineer</Link>
									</span>
									<div className="buttons-to-right">
										<Link to="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></Link>
									</div>
								</li>
								<li>
									<span className="notification-icon"><i className="icon-material-outline-rate-review"></i></span>
									<span className="notification-text">
										<strong>David Peterson</strong> left you a <span className="star-rating no-stars" data-rating="5.0"></span> rating after finishing <Link to="#">Logo Design</Link> task
									</span>
									<div className="buttons-to-right">
										<Link to="#" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left"><i className="icon-feather-check-square"></i></Link>
									</div>
								</li>
							</ul>
						</div>
					</div>
  )
}

export default Notification