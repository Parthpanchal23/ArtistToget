import React from "react";


const About = () => {
  return (
    <>
    <div >
      <h1>About ArtistToget</h1>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require("assets/images/w-logo.png")}
              alt="logo"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
            Artisttoget.com is an expression of our beliefs that we hold close to our hearts. It's one thing to simply provide a platform where Employers and Freelancers can work together. It's another to do it in our own unique way.

We strive to be the premier platform where professionals go to connect, collaborate, and get work done. We believe that the best work is done in a flexible and secure environment. With transparency comes trust, and with a community that's built on meritocracy, people are eager to set aside differences in geography, politics and religion to share and profit from economic opportunities.

Since 1998, we have been working tirelessly out of our offices in Pittsburgh, PA and Noida, India to turn these aspirations into reality. We have developed a close bond with our users. As their needs have changed, we have evolved our platform to provide the tools and support they want. Our users teach us, we learn and we grow. We invite you to become a part of our expanding community!
            </p>
          </div>
          <div class="col-lg-5">
            <img alt="w-logo"src="" ></img>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default About;
