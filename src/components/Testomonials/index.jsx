import React from "react";
import Heding from "../Heding";

const Testimonials = () => {
  let data = [
    {
      name: "Sindy Forest",
      des: "Dancer",
      profile: {
        url: "./images/user-avatar-small-02.jpg",
        tumbnail: "./images/user-avatar-small-02.jpg",
      },
      message: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-timeschemas. Dramatically maintain clicks-and-mortar solutionswithout functional solutions.",
    },
    {
      name: "Raj hansh",
      des: "Dinger",
      profile: {
        url: "./images/user-avatar-small-03.jpg",
        tumbnail: "./images/user-avatar-small-03.jpg",
      },
      message: "maximize timely deliverables for real-timeschemas. Dramatically maintain clicks-and-mortar solutionswithout functional solutions.",
    },
  ];
  return (<>
    <div className="section gray padding-top-65 padding-bottom-55">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
          <Heding title="Testimonials" className="centered"/>
          </div>
        </div>
      </div>

      <div className="fullwidth-carousel-container margin-top-20">
        <div className="testimonial-carousel testimonials">
          {data.map((item ,i)=><div className="fw-carousel-review" key={i}>
            <div className="testimonial-box">
              <div className="testimonial-avatar">
                <img src={item.profile.url} alt={item.name} />
              </div>
              <div className="testimonial-author">
                <h4>{item.name}</h4>
                <span>{item.des}</span>
              </div>
              <div className="testimonial">
               {item.message}
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
    </>)
};

export default Testimonials;
