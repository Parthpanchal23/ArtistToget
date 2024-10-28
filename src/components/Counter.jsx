import React from 'react'

const Counter = () => {
  return (
    <div className="section padding-top-70 padding-bottom-75">
	<div className="container">
		<div className="row">

			<div className="col-xl-12">
				<div className="counters-container">
					
					<div className="single-counter">
						<i className="icon-line-awesome-suitcase"></i>
						<div className="counter-inner">
							<h3><span className="counter">1,586</span></h3>
							<span className="counter-title">Jobs Posted</span>
						</div>
					</div>

					<div className="single-counter">
						<i className="icon-line-awesome-legal"></i>
						<div className="counter-inner">
							<h3><span className="counter">3,543</span></h3>
							<span className="counter-title">Tasks Posted</span>
						</div>
					</div>

					<div className="single-counter">
						<i className="icon-line-awesome-user"></i>
						<div className="counter-inner">
							<h3><span className="counter">2,413</span></h3>
							<span className="counter-title">Active Members</span>
						</div>
					</div>

					<div className="single-counter">
						<i className="icon-line-awesome-trophy"></i>
						<div className="counter-inner">
							<h3><span className="counter">99</span>%</h3>
							<span className="counter-title">Satisfaction Rate</span>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Counter