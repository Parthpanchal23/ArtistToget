import React from "react";
import Heding from "./Heding";

const Workflow = () => {
  return (
    <div>
      <div className="section padding-top-65 padding-bottom-65">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <Heding
                title="How It Works?"
                className="centered  margin-top-0 margin-bottom-5"
              />
            </div>

            <div className="col-xl-4 col-md-4">
              <div className="icon-box with-line">
                <div className="icon-box-circle">
                  <div className="icon-box-circle-inner">
                    <i className="icon-line-awesome-lock"></i>
                    <div className="icon-box-check">
                      <i className="icon-material-outline-check"></i>
                    </div>
                  </div>
                </div>
                <h3>Create an Account</h3>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination going forward.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-md-4">
              <div className="icon-box with-line">
                <div className="icon-box-circle">
                  <div className="icon-box-circle-inner">
                    <i className="icon-line-awesome-legal"></i>
                    <div className="icon-box-check">
                      <i className="icon-material-outline-check"></i>
                    </div>
                  </div>
                </div>
                <h3>Post a Task</h3>
                <p>
                  Efficiently unleash cross-media information without. Quickly
                  maximize return on investment.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-md-4">
              <div className="icon-box">
                <div className="icon-box-circle">
                  <div className="icon-box-circle-inner">
                    <i className=" icon-line-awesome-trophy"></i>
                    <div className="icon-box-check">
                      <i className="icon-material-outline-check"></i>
                    </div>
                  </div>
                </div>
                <h3>Choose an Expert</h3>
                <p>
                  Nanotechnology immersion along the information highway will
                  close the loop on focusing solely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
