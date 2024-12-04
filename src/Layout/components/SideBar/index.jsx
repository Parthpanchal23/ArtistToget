import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="dashboard-sidebar">
		<div className="dashboard-sidebar-inner" data-simplebar>
			<div className="dashboard-nav-container">

				<Link to="#" className="dashboard-responsive-nav-trigger">
					<span className="hamburger hamburger--collapse" >
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</span>
					<span className="trigger-title">Dashboard Navigation</span>
				</Link>
				
				<div className="dashboard-nav">
					<div className="dashboard-nav-inner">
						<ul data-submenu-title="Start">
							<li className="active"><Link to="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
							<li><Link to="dashboard-messages.html"><i className="icon-material-outline-question-answer"></i> Messages <span className="nav-tag">2</span></Link></li>
							<li><Link to="dashboard-bookmarks.html"><i className="icon-material-outline-star-border"></i> Bookmarks</Link></li>
							<li><Link to="dashboard-reviews.html"><i className="icon-material-outline-rate-review"></i> Reviews</Link></li>
						</ul>
						
						<ul data-submenu-title="Organize and Manage">
							<li><Link to="#"><i className="icon-material-outline-business-center"></i> Jobs</Link>
								<ul>
									<li><Link to="dashboard-manage-jobs.html">Manage Jobs <span className="nav-tag">3</span></Link></li>
									<li><Link to="dashboard-manage-candidates.html">Manage Candidates</Link></li>
									<li><Link to="dashboard-post-a-job.html">Post a Job</Link></li>
								</ul>	
							</li>
							<li><Link to="#"><i className="icon-material-outline-assignment"></i> Tasks</Link>
								<ul>
									<li><Link to="dashboard-manage-tasks.html">Manage Tasks <span className="nav-tag">2</span></Link></li>
									<li><Link to="dashboard-manage-bidders.html">Manage Bidders</Link></li>
									<li><Link to="dashboard-my-active-bids.html">My Active Bids <span className="nav-tag">4</span></Link></li>
									<li><Link to="dashboard-post-a-task.html">Post a Task</Link></li>
								</ul>	
							</li>
						</ul>

						<ul data-submenu-title="Account">
							<li><Link to="/setting"><i className="icon-material-outline-settings"></i> Settings</Link></li>
							<li><Link to="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</Link></li>
						</ul>
						
					</div>
				</div>

			</div>
		</div>
	</div>
  )
}

export default SideBar