import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Layout/components/Footer'
import Notes from '../../components/Dashboard/Notes'
import ProfileView from '../../components/Dashboard/ProfileView'
import Notification from '../../components/Dashboard/Notification'
import Order from '../../components/Dashboard/Order'
import Breadcum from '../../components/Ui/Breadcum'

const Dashboard = () => {
  return (
    <div className="dashboard-content-container"> 
    
    {/* data-simplebar> */}
		<div className="dashboard-content-inner" >
			
			<div className="dashboard-headline">
				<h3>Howdy, Tom!</h3>
				<span>We are glad to see you again!</span>

				<Breadcum Mode={"dark"}>
					<ul>
						<li><Link to="#">Home</Link></li>
						<li>Dashboard</li>
					</ul>
				</Breadcum>
			</div>
	
			<div className="fun-facts-container">
				<div className="fun-fact" data-fun-fact-color="#36bd78">
					<div className="fun-fact-text">
						<span>Task Bids Won</span>
						<h4>22</h4>
					</div>
					<div className="fun-fact-icon"><i className="icon-material-outline-gavel"></i></div>
				</div>
				<div className="fun-fact" data-fun-fact-color="#b81b7f">
					<div className="fun-fact-text">
						<span>Jobs Applied</span>
						<h4>4</h4>
					</div>
					<div className="fun-fact-icon"><i className="icon-material-outline-business-center"></i></div>
				</div>
				<div className="fun-fact" data-fun-fact-color="#efa80f">
					<div className="fun-fact-text">
						<span>Reviews</span>
						<h4>28</h4>
					</div>
					<div className="fun-fact-icon"><i className="icon-material-outline-rate-review"></i></div>
				</div>

				<div className="fun-fact" data-fun-fact-color="#2a41e6">
					<div className="fun-fact-text">
						<span>This Month Views</span>
						<h4>987</h4>
					</div>
					<div className="fun-fact-icon"><i className="icon-feather-trending-up"></i></div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-xl-8">
					<ProfileView/>
				</div>
				<div className="col-xl-4">
          <Notes/>
				</div>
			</div>

			<div className="row">

				<div className="col-xl-6">
					<Notification/>
				</div>

				<div className="col-xl-6">
				<Order/>
				</div>

			</div>

			<div className="dashboard-footer-spacer"></div>
      <Footer type="MINI"/>
			{/* <div className="small-footer margin-top-15">
				<div className="small-footer-copyrights">
					© {new Date().getFullYear()} <strong>ArtistToget</strong>. All Rights Reserved.
				</div>
				<ul className="footer-social-links">
					<li>
						<Link to="/" title="Facebook" data-tippy-placement="top">
							<i className="icon-brand-facebook-f"></i>
						</Link>
					</li>
					<li>
						<Link to="/" title="Twitter" data-tippy-placement="top">
							<i className="icon-brand-twitter"></i>
						</Link>
					</li>
					<li>
						<Link to="/" title="Google Plus" data-tippy-placement="top">
							<i className="icon-brand-google-plus-g"></i>
						</Link>
					</li>
					<li>
						<Link to="/" title="LinkedIn" data-tippy-placement="top">
							<i className="icon-brand-linkedin-in"></i>
						</Link>
					</li>
				</ul>
				<div className="clearfix"></div>
			</div> */}

		</div>
	</div>
  )
}

export default Dashboard