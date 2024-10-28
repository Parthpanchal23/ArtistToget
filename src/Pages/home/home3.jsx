import React from "react";
import Banner from "../../components/Banner/Index";
import Counter from "../../components/Counter";
import Workflow from "../../components/Workflow";
import PopulerCategoriesListing from "../../components/Categories/PopulerCategoriesListing";
import Testimonials from "../../components/Testomonials";

function Home3() {
  return (
    <div>
      <Banner
        Role="HIRER"
        BackImg="./images/Banner/banner-02.jpg"
      >
        <div className="banner-headline">
          <h3>
            <strong>Hire experts freelancers for any job, any time.</strong>
            <br />
            <span>
              Huge community of designers, developers and creatives ready for your
              project.
            </span>
          </h3>
        </div>
      </Banner>
      <PopulerCategoriesListing/>
        <Workflow/>
        <Testimonials/>
        <Counter/>
    </div>
  );
}

export default Home3;
