import React from "react";

const FeatureItem = ({data}) => {
  let  date1 = new Date(data?.createdAt);
let date2 = new Date();
let diff =date2 - date1;
let days =Math.round
(diff / (1000 * 3600 * 24));

  return (
    <a href={data?.href||`./job/${data?._id}`} className="job-listing with-apply-button">
      <div className="job-listing-details">
        <div className="job-listing-company-logo">
          <img src={data?.img||data?.image||"./w-logo.png" } alt={data?.title} />
        </div>

        <div className="job-listing-description">
          <h3 className="job-listing-title">
            {data?.Title||data?.title}
          </h3>

          <div className="job-listing-footer">
          {/* {data?.content} */}
        <ul>
          <li>
            <i className="icon-material-outline-business"></i> Hexagon
            {data?.status ==true&&<div
              className="verified-badge"
              title="Verified Employer"
              data-tippy-placement="top"
            ></div>}
          </li>
          <li>
            <i className="icon-material-outline-location-on"></i> San Francissco
          </li>
          <li>
            <i className="icon-material-outline-access-time"></i> {days} days ago
          </li>
          {data?.keyword &&
          <li>
            <i className="icon-material-outline-business-center"></i> {data?.keyword?.[0]}
          </li>
          }
        </ul>
          </div>
        </div>

        <span className="list-apply-button ripple-effect">Apply Now</span>
      </div>
    </a>
  );
};

export default FeatureItem;
