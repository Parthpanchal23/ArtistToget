import React from 'react';
import PricingConent from '../../components/Pricing';
import Banner from '../../components/Banner/Index';
import CategoriesListing from '../../components/Categories/CategoriesListing';
import FeatureJob from '../../components/Job/FeatureJob';
import HighRatedArtist from '../../components/Artists/HighRated';

function Home1() {
  return (
    <>
        <Banner
        BackImg="./images/home-background.jpg"
        Heading="Hire experts or be hired for any job, any time."
        >
        <div className="banner-headline">
        <h3>
            <strong>
                Hire experts or be hired for any job, any time.
                </strong>
            <br/>
            <span>
                Thousands of small artist use <strong className="color">ArtistToGet</strong> to turn their ideas into  reality.
                </span>
        </h3>
    </div>
    </Banner>
        <CategoriesListing/> 
        <FeatureJob title="Featured Jobs"/>
        <HighRatedArtist/>
        <PricingConent title="Membership Plans"/> 
    </>
  )
}

export default Home1