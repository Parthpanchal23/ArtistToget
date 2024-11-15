import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Job = () => {
    const [visible,setVisible] = useState(false);
  return (
    <div className="full-page-container with-map">
        <div className={`full-page-sidebar ${!visible && 'hidden-sidebar'}`}>
		<div className="full-page-sidebar-inner" data-simplebar>

			<div className="sidebar-container">
				<div className="sidebar-widget">
					<h3>Keywords</h3>
					<div className="keywords-container">
						<div className="keyword-input-container">
							<input type="text" className="keyword-input" placeholder="e.g. job title"/>
							<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
						</div>
						<div className="keywords-list">
                            {/* <!-- keywords go here --> */}
                            </div>
						<div className="clearfix"></div>
					</div>
				</div>
				
				<div className="sidebar-widget">
					<h3>Category</h3>
					<select className="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="All Categories" >
						<option>Admin Support</option>
						<option>Customer Service</option>
						<option>Data Analytics</option>
						<option>Design & Creative</option>
						<option>Legal</option>
						<option>Software Developing</option>
						<option>IT & Networking</option>
						<option>Writing</option>
						<option>Translation</option>
						<option>Sales & Marketing</option>
					</select>
				</div>
				
				<div className="sidebar-widget">
					<h3>Job Type</h3>

					<div className="switches-list">
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Freelance</label>
						</div>

						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Full Time</label>
						</div>

						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Part Time</label>
						</div>

						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Internship</label>
						</div>
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Temporary</label>
						</div>
					</div>

				</div>

				<div className="sidebar-widget">
					<h3>Salary</h3>
					<div className="margin-top-55"></div>

					<input className="range-slider" type="text" value="" data-slider-currency="$" data-slider-min="1500" data-slider-max="15000" data-slider-step="100" data-slider-value="[1500,15000]"/>
				</div>

				<div className="sidebar-widget">
					<h3>Tags</h3>

					<div className="tags-container">
						<div className="tag">
							<input type="checkbox" id="tag1"/>
							<label for="tag1">front-end dev</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag2"/>
							<label for="tag2">angular</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag3"/>
							<label for="tag3">react</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag4"/>
							<label for="tag4">vue js</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag5"/>
							<label for="tag5">web apps</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag6"/>
							<label for="tag6">design</label>
						</div>
						<div className="tag">
							<input type="checkbox" id="tag7"/>
							<label for="tag7">wordpress</label>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>

			</div>

			<div className="sidebar-search-button-container">
				<button className="button ripple-effect" onClick={()=>setVisible(false)}>Search</button>
			</div>

		</div>
	</div>

    {/* <!-- Full Page Content --> */}
	<div className="full-page-content-container" data-simplebar>
		<div className="full-page-content-inner">

			<h3 className="page-title">Search Results</h3>

			{/* <div className="notify-box margin-top-15">
				<div className="switch-container">
					<label className="switch"><input type="checkbox"/><span className="switch-button"></span><span className="switch-text">Turn on email alerts for this search</span></label>
				</div>

				<div className="sort-by">
					<span>Sort by:</span>
					<select className="selectpicker hide-tick">
						<option>Relevance</option>
						<option>Newest</option>
						<option>Oldest</option>
						<option>Random</option>
					</select>
				</div>
			</div> */}

			<div className="listings-container grid-layout margin-top-35">
				
				<Link href="single-job-page.html" className="job-listing">

					<div className="job-listing-details">
						<div className="job-listing-company-logo">
							<img src="images/company-logo-01.png" alt=""/>
						</div>

						<div className="job-listing-description">
							<h4 className="job-listing-company">Hexagon <span className="verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h4>
							<h3 className="job-listing-title">Bilingual Event Support Specialist</h3>
						</div>
					</div>

					<div className="job-listing-footer">
						<span className="bookmark-icon"></span>
						<ul>
							<li><i className="icon-material-outline-location-on"></i> San Francisco</li>
							<li><i className="icon-material-outline-business-center"></i> Full Time</li>
							<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
							<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
						</ul>
					</div>
				</Link>	

				<Link href="single-job-page.html" className="job-listing">

					<div className="job-listing-details">
						<div className="job-listing-company-logo">
							<img src="images/company-logo-05.png" alt=""/>
						</div>

						<div className="job-listing-description">
							<h4 className="job-listing-company">Laxo</h4>
							<h3 className="job-listing-title">Competition Law Officer</h3>
						</div>
					</div>

					<div className="job-listing-footer">
						<span className="bookmark-icon"></span>
						<ul>
							<li><i className="icon-material-outline-location-on"></i> San Francisco</li>
							<li><i className="icon-material-outline-business-center"></i> Full Time</li>
							<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
							<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
						</ul>
					</div>
				</Link>

				<Link href="single-job-page.html" className="job-listing">

					<div className="job-listing-details">
						<div className="job-listing-company-logo">
							<img src="images/company-logo-02.png" alt=""/>
						</div>

						<div className="job-listing-description">
							<h4 className="job-listing-company">Coffee</h4>
							<h3 className="job-listing-title">Barista and Cashier</h3>
						</div>
					</div>

					<div className="job-listing-footer">
						<span className="bookmark-icon"></span>
						<ul>
							<li><i className="icon-material-outline-location-on"></i> San Francisco</li>
							<li><i className="icon-material-outline-business-center"></i> Full Time</li>
							<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
							<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
						</ul>
					</div>
				</Link>
				

			</div>

			<div className="clearfix"></div>
			<div className="pagination-container margin-top-20 margin-bottom-20">
				<nav className="pagination">
					<ul>
						<li className="pagination-arrow"><Link href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></Link></li>
						<li><Link href="#" className="ripple-effect">1</Link></li>
						<li><Link href="#" className="ripple-effect current-page">2</Link></li>
						<li><Link href="#" className="ripple-effect">3</Link></li>
						<li><Link href="#" className="ripple-effect">4</Link></li>
						<li className="pagination-arrow"><Link href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></Link></li>
					</ul>
				</nav>
			</div>
			<div className="clearfix"></div>

			{/* <div className="small-footer margin-top-15">
				<div className="small-footer-copyrights">
					© 2018 <strong>Hireo</strong>. All Rights Reserved.
				</div>
				<ul className="footer-social-links">
					<li>
						<Link href="#" title="Facebook" data-tippy-placement="top">
							<i className="icon-brand-facebook-f"></i>
						</Link>
					</li>
					<li>
						<Link href="#" title="Twitter" data-tippy-placement="top">
							<i className="icon-brand-twitter"></i>
						</Link>
					</li>
					<li>
						<Link href="#" title="Google Plus" data-tippy-placement="top">
							<i className="icon-brand-google-plus-g"></i>
						</Link>
					</li>
					<li>
						<Link href="#" title="LinkedIn" data-tippy-placement="top">
							<i className="icon-brand-linkedin-in"></i>
						</Link>
					</li>
				</ul>
				<div className="clearfix"></div>
			</div> */}

		</div>
	</div>


	<div className="full-page-map-container">
		
		<div className="filter-button-container">
			<button className="enable-filters-button" onClick={()=>setVisible(!visible)}>
				<i className="enable-filters-button-icon"></i>
                 
				<span className="show-text">{!visible ?'Show':'Hide'} Filters</span>:
				<span className="hide-text">Hide Filters</span>
			</button>
			<div className="filter-button-tooltip">Click to expand sidebar with filters!</div>
		</div>
		
	    <div id="map" data-map-zoom="12"  data-map-scroll="true"></div>
	</div>

    </div>
  )
}

export default Job