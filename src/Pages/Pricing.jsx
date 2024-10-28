import React from 'react'
import PricingConent from '../components/Pricing'

const Pricing = () => {
  return (
    <div>
      <div id="titlebar" className="gradient">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Pricing Plans</h2>
            <nav id="breadcrumbs" className="dark">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li>Pricing Plans</li>
              </ul>
            </nav>
          </div>
            <PricingConent/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Pricing