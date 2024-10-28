import React from "react";

const FeatureItem = ({data:{img,Title,href,content}}) => {
  return (
    <a href={href} className="job-listing with-apply-button">
      <div className="job-listing-details">
        <div className="job-listing-company-logo">
          <img src={img} alt="" />
        </div>

        <div className="job-listing-description">
          <h3 className="job-listing-title">
            {Title}
          </h3>

          <div className="job-listing-footer">
          {content}
          </div>
        </div>

        <span className="list-apply-button ripple-effect">Apply Now</span>
      </div>
    </a>
  );
};

export default FeatureItem;
