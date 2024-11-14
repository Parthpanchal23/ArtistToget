import React from 'react'
import CopyRight from './CopyRight'
import Newsletter from './Newsletter'
import { Link } from 'react-router-dom'
import LangSwitcher from './LangSwitcher'

const Footer = () => {
  return (
    <div>
        <div id="footer">
	{/* <!-- Footer Top Section --> */}
	<div className="footer-top-section">
		<div className="container">
			<div className="row">
				<div className="col-xl-12">

					<div className="footer-rows-container">
						
						<div className="footer-rows-left">
							<div className="footer-row">
								<div className="footer-row-inner footer-logo">
									<img src='./logo1.jpg' alt="" />
								</div>
							</div>
						</div>
						
						<div className="footer-rows-right">

							<div className="footer-row">
								<div className="footer-row-inner">
									<ul className="footer-social-links">
										<li>
											<Link to="/" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link to="/" title="Twitter" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-twitter"></i>
											</Link>
										</li>
										<li>
											<Link to="/" title="Google Plus" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-google-plus-g"></i>
											</Link>
										</li>
										<li>
											<Link to="/" title="LinkedIn" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-linkedin-in"></i>
											</Link>
										</li>
									</ul>
									<div className="clearfix"></div>
								</div>
							</div>
							
							{/* <!-- Language Switcher --> */}
							<div className="footer-row">
								<div className="footer-row-inner">
									<LangSwitcher/>
								</div>
							</div>
						</div>

					</div>
					{/* <!-- Footer Rows Container / End --> */}
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Footer Top Section / End --> */}

	{/* <!-- Footer Middle Section --> */}
	<div className="footer-middle-section">
		<div className="container">
			<div className="row">

				<div className="col-xl-2 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>For Candidates</h3>
						<ul>
							<li><Link to="/"><span>Browse Jobs</span></Link></li>
							<li><Link to="/"><span>Add Resume</span></Link></li>
							<li><Link to="/"><span>Job Alerts</span></Link></li>
							<li><Link to="/"><span>My Bookmarks</span></Link></li>
						</ul>
					</div>
				</div>

				<div className="col-xl-2 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>For Employers</h3>
						<ul>
							<li><Link to="/"><span>Browse Candidates</span></Link></li>
							<li><Link to="/"><span>Post a Job</span></Link></li>
							<li><Link to="/"><span>Post a Task</span></Link></li>
							<li><Link to="/"><span>Plans & Pricing</span></Link></li>
						</ul>
					</div>
				</div>

				<div className="col-xl-2 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>Helpful Links</h3>
						<ul>
							<li><Link to="/"><span>Contact</span></Link></li>
							<li><Link to="/"><span>Privacy Policy</span></Link></li>
							<li><Link to="/"><span>Terms of Use</span></Link></li>
						</ul>
					</div>
				</div>

				<div className="col-xl-2 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>Account</h3>
						<ul>
							<li><Link to="/"><span>Log In</span></Link></li>
							<li><Link to="/"><span>My Account</span></Link></li>
						</ul>
					</div>
				</div>

				{/* <!-- Newsletter --> */}
				<Newsletter/>
			</div>
		</div>
	</div>
	{/* <!-- Footer Middle Section / End --> */}
	
	{/* <!-- Footer Copyrights --> */}
	<CopyRight/>
	{/* <!-- Footer Copyrights / End --> */}

</div>
    </div>
  )
}

export default Footer