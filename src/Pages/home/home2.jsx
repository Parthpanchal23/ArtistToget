import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import Banner from '../../components/Banner/Index'
import FeatureJob from '../../components/Job/FeatureJob'
import InfoBox from '../../components/InfoBox'
import RecentBlog from '../../components/Blog/RecentBlog'
import LogoCarousel from '../../components/LogoCarousel'

function Home2() {
  return (
    <>
      <Banner 
        Role="ARTIST" 
        BackImg="./images/home-video-background-poster.jpg"
        >
          <div className="banner-headline">
            <h3>
              <strong>Don't Just Dream, Do</strong>
              <br />
              <span>
              Find the best jobs in the digital industry
              </span>
            </h3>
          </div>
        </Banner>
      <FeatureJob  title="Recent Jobs"/>
      <InfoBox/>
      <RecentBlog/>
      <LogoCarousel/>
    </>
  )
}

export default Home2