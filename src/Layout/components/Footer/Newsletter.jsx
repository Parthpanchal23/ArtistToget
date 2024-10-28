import React from "react";

const Newsletter = () => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-12">
      <h3>
        <i className="icon-feather-mail"></i> Sign Up For a Newsletter
      </h3>
      <p>
        Weekly breaking news, analysis and cutting edge advices on job
        searching.
      </p>
      <form action="#" method="get" className="newsletter">
        <input
          type="text"
          name="fname"
          placeholder="Enter your email address"
        />
        <button type="submit">
          <i className="icon-feather-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
