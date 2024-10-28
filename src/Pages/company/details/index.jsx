const CompanyDetails = () =>{
    return (<>
    <div className="single-page-header" data-background-image="./images/single-company.jpg">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="single-page-header-inner">
					<div className="left-side">
						<div className="header-image"><img src="./images/browse-companies-03.png" alt=""/></div>
						<div className="header-details">
							<h3>Acodia <span>Software House</span></h3>
							<ul>
								<li><div className="star-rating" data-rating="4.9"></div></li>
								<li><img className="flag" src="./images/flags/de.svg" alt=""/> Germany</li>
								<li><div className="verified-badge-with-title">Verified</div></li>
							</ul>
						</div>
					</div>
					<div className="right-side">
						<nav id="breadcrumbs" className="white">
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">Browse Companies</a></li>
								<li>Acodia</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/* content */}
<div className="container">
	<div className="row">
		
		<div className="col-xl-8 col-lg-8 content-right-offset">

			<div className="single-page-section">
				<h3 className="margin-bottom-25">About Company</h3>
				<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

				<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
			</div>
			
			<div className="boxed-list margin-bottom-60">
				<div className="boxed-list-headline">
					<h3><i className="icon-material-outline-business-center"></i> Open Positions</h3>
				</div>

				<div className="listings-container compact-list-layout">
					
					<a href="single-job-page.html" className="job-listing">

						<div className="job-listing-details">

							<div className="job-listing-description">
								<h3 className="job-listing-title">Python Developer</h3>

								<div className="job-listing-footer">
									<ul>
										<li><i className="icon-material-outline-location-on"></i> Berlin</li>
										<li><i className="icon-material-outline-business-center"></i> Full Time</li>
										<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
									</ul>
								</div>
							</div>

						</div>

						<span className="bookmark-icon"></span>
					</a>

					<a href="single-job-page.html" className="job-listing">

						<div className="job-listing-details">

							<div className="job-listing-description">
								<h3 className="job-listing-title">Junior Full Stack Developer</h3>

								<div className="job-listing-footer">
									<ul>
										<li><i className="icon-material-outline-location-on"></i> Berlin</li>
										<li><i className="icon-material-outline-business-center"></i> Full Time</li>
										<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
									</ul>
								</div>
							</div>

						</div>

						<span className="bookmark-icon"></span>
					</a>	
				</div>

			</div>

			<div className="boxed-list margin-bottom-60">
				<div className="boxed-list-headline">
					<h3><i className="icon-material-outline-thumb-up"></i> Reviews</h3>
				</div>
				<ul className="boxed-list-ul">
					<li>
						<div className="boxed-list-item">
							<div className="item-content">
								<h4>Doing things the right way <span>Anonymous Employee</span></h4>
								<div className="item-details margin-top-10">
									<div className="star-rating" data-rating="5.0"></div>
									<div className="detail-item"><i className="icon-material-outline-date-range"></i> August 2018</div>
								</div>
								<div className="item-description">
									<p>Great company and especially ideal for the career-minded individual. The company is large enough to offer a variety of jobs in all kinds of interesting locations. Even if you never change roles, your job changes and evolves as the company grows, keeping things fresh.</p>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="boxed-list-item">
							<div className="item-content">
								<h4>Outstanding Work Environment <span>Anonymous Employee</span></h4>
								<div className="item-details margin-top-10">
									<div className="star-rating" data-rating="5.0"></div>
									<div className="detail-item"><i className="icon-material-outline-date-range"></i> May 2018</div>
								</div>
								<div className="item-description">
									<p>They do business with integrity and rational thinking. Overall, it's an excellent place to work, with products that are winning in the marketplace.</p>
								</div>
							</div>
						</div>
					</li>
				</ul>

				<div className="centered-button margin-top-35">
					<a href="#small-dialog" className="popup-with-zoom-anim button button-sliding-icon">Leave a Review <i className="icon-material-outline-arrow-right-alt"></i></a>
				</div>

			</div>

		</div>
		

		<div className="col-xl-4 col-lg-4">
			<div className="sidebar-container">

				<div className="sidebar-widget">
					<h3>Location</h3>
					<div id="single-job-map-container">
						<div id="singleListingMap" data-latitude="52.520007" data-longitude="13.404954" data-map-icon="im im-icon-Hamburger"></div>
						<a href="#" id="streetView">Street View</a>
					</div>
				</div>

				<div className="sidebar-widget">
					<h3>Social Profiles</h3>
					<div className="freelancer-socials margin-top-25">
						<ul>
							<li><a href="#" title="Dribbble" data-tippy-placement="top"><i className="icon-brand-dribbble"></i></a></li>
							<li><a href="#" title="Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
							<li><a href="#" title="Behance" data-tippy-placement="top"><i className="icon-brand-behance"></i></a></li>
							<li><a href="#" title="GitHub" data-tippy-placement="top"><i className="icon-brand-github"></i></a></li>
						
						</ul>
					</div>
				</div>

				<div className="sidebar-widget">
					<h3>Bookmark or Share</h3>

					<button className="bookmark-button margin-bottom-25">
						<span className="bookmark-icon"></span>
						<span className="bookmark-text">Bookmark</span>
						<span className="bookmarked-text">Bookmarked</span>
					</button>

					<div className="copy-url">
						<input id="copy-url" type="text" value="" className="with-border"/>
						<button className="copy-url-button ripple-effect" data-clipboard-target="#copy-url" title="Copy to Clipboard" data-tippy-placement="top"><i className="icon-material-outline-file-copy"></i></button>
					</div>

					<div className="share-buttons margin-top-25">
						<div className="share-buttons-trigger"><i className="icon-feather-share-2"></i></div>
						<div className="share-buttons-content">
							<span>Interesting? <strong>Share It!</strong></span>
							<ul className="share-buttons-icons">
								<li><a href="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f"></i></a></li>
								<li><a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
								<li><a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g"></i></a></li>
								<li><a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in"></i></a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>
</div>
</>)
}

export default CompanyDetails