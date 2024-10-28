import React from "react";

const ArtistCard = ({
  data: {
    img,
    name,
    address,
    rate,
    taskcompleted,
    href,
    profesional,
    verified,
  },
}) => {
  return (
    <div className="freelancer">
      <div className="freelancer-overview">
        <div className="freelancer-overview-inner">
          <span className="bookmark-icon"></span>

          <div className="freelancer-avatar">
            <a href="single-freelancer-profile.html">
              {verified && <div class="verified-badge"></div>}
              <img src={img?.origin ? img.origin : ""} alt="" />
            </a>
          </div>

          <div className="freelancer-name">
            <h4>
              <a href="#">
                {name ? name : "Gabriel Lagueux"}
                <img
                  className="flag"
                  src="./images/flags/fr.svg"
                  alt=""
                  title="France"
                  data-tippy-placement="top"
                />
              </a>
            </h4>
            <span>{profesional?.Title ? profesional?.Title : "-"}</span>
          </div>

          <div className="freelancer-rating">
            <div className="star-rating" data-rating="5.0"></div>
          </div>
        </div>
      </div>

      <div className="freelancer-details">
        <div className="freelancer-details-list">
          <ul>
            <li>
              Location
              <strong>
                <i className="icon-material-outline-location-on"></i>{" "}
                {address?.country ? address?.country : "Indonesia"}
              </strong>
            </li>
            <li>
              Rate <strong>${rate} / hr</strong>
            </li>
            <li>
              Job Success <strong>{taskcompleted}</strong>
            </li>
          </ul>
        </div>
        <a href={href} className="button button-sliding-icon ripple-effect">
          View Profile <i className="icon-material-outline-arrow-right-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default ArtistCard;
