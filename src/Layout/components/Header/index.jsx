import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="wrapper">
      <header id="header-container" className="fullwidth transparent">
        <div id="header">
          <div className="container">
            <div className="left-side">
              <div id="logo">
                <a href="index-2">
                  <img src="./logo.png" alt="logo" className="hidden md:block lg:block"/>
                  <img src="./logo1.jpg" alt="logo" className=" block md:hidden lg:hidden border" style={{height:"3.2rem"}} />
                </a>
              </div>

              <nav id="navigation">
                <ul id="responsive">
                  <li>
                    <a href="/" className="current">
                      Home
                    </a>
                    <ul className="dropdown-nav">
                      <li>
                        <a href="/home2">Home 1</a>
                      </li>
                      <li>
                        <a href="/home3">Home 2</a>
                      </li>
                     
                    </ul>
                  </li>

                  <li>
                    <a href="/">Find Work</a>
                    <ul className="dropdown-nav">
                      <li>
                        <a href="/">Browse Jobs</a>
                        <ul className="dropdown-nav">
                          <li>
                            <a href="jobs-list-layout-full-page-map">
                              Full Page List + Map
                            </a>
                          </li>
                          <li>
                            <a href="jobs-grid-layout-full-page-map">
                              Full Page Grid + Map
                            </a>
                          </li>
                          <li>
                            <a href="jobs-grid-layout-full-page">
                              Full Page Grid
                            </a>
                          </li>
                          <li>
                            <a href="jobs-list-layout-1">List Layout 1</a>
                          </li>
                          <li>
                            <a href="jobs-list-layout-2">List Layout 2</a>
                          </li>
                          <li>
                            <a href="jobs-grid-layout">Grid Layout</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">Browse Tasks</a>
                        <ul className="dropdown-nav">
                          <li>
                            <a href="tasks-list-layout-1">List Layout 1</a>
                          </li>
                          <li>
                            <a href="tasks-list-layout-2">List Layout 2</a>
                          </li>
                          <li>
                            <a href="tasks-grid-layout">Grid Layout</a>
                          </li>
                          <li>
                            <a href="tasks-grid-layout-full-page">
                              Full Page Grid
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="browse-companies">Browse Companies</a>
                      </li>
                      <li>
                        <a href="single-job-page">Job Page</a>
                      </li>
                      <li>
                        <a href="single-task-page">Task Page</a>
                      </li>
                      <li>
                        <a href="single-company-profile">
                          Company Profile
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/">For Employers</a>
                    <ul className="dropdown-nav">
                      <li>
                        <a href="/">Find a Freelancer</a>
                        <ul className="dropdown-nav">
                          <li>
                            <a href="freelancers-grid-layout-full-page">
                              Full Page Grid
                            </a>
                          </li>
                          <li>
                            <a href="freelancers-grid-layout">
                              Grid Layout
                            </a>
                          </li>
                          <li>
                            <a href="freelancers-list-layout-1">
                              List Layout 1
                            </a>
                          </li>
                          <li>
                            <a href="freelancers-list-layout-2">
                              List Layout 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="single-freelancer-profile">
                          Freelancer Profile
                        </a>
                      </li>
                      <li>
                        <a href="dashboard-post-a-job">Post a Job</a>
                      </li>
                      <li>
                        <a href="dashboard-post-a-task">Post a Task</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/">Dashboard</a>
                    <ul className="dropdown-nav">
                      <li>
                        <a href="dashboard">Dashboard</a>
                      </li>
                      <li>
                        <a href="dashboard-messages">Messages</a>
                      </li>
                      <li>
                        <a href="dashboard-bookmarks">Bookmarks</a>
                      </li>
                      <li>
                        <a href="dashboard-reviews">Reviews</a>
                      </li>
                      <li>
                        <a href="dashboard-manage-jobs">Jobs</a>
                        <ul className="dropdown-nav">
                          <li>
                            <a href="dashboard-manage-jobs">Manage Jobs</a>
                          </li>
                          <li>
                            <a href="dashboard-manage-candidates">
                              Manage Candidates
                            </a>
                          </li>
                          <li>
                            <a href="dashboard-post-a-job">Post a Job</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="dashboard-manage-tasks">Tasks</a>
                        <ul className="dropdown-nav">
                          <li>
                            <a href="dashboard-manage-tasks">
                              Manage Tasks
                            </a>
                          </li>
                          <li>
                            <a href="dashboard-manage-bidders">
                              Manage Bidders
                            </a>
                          </li>
                          <li>
                            <a href="dashboard-my-active-bids">
                              My Active Bids
                            </a>
                          </li>
                          <li>
                            <a href="dashboard-post-a-task">Post a Task</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="dashboard-settings">Settings</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/">Pages</a>
                    <ul className="dropdown-nav">
                      <li>
                        <a href="pages-blog">BLOG</a>
                      </li>
                      <li>
                        <a href="pages-pricing-plans">Pricing Plans</a>
                      </li>
                      <li>
                        <a href="pages-checkout-page">Checkout Page</a>
                      </li>
                      <li>
                        <a href="pages-invoice-template">
                          Invoice Template
                        </a>
                      </li>
                      <li>
                        <a href="pages-user-interface-elements">
                          User Interface Elements
                        </a>
                      </li>
                      <li>
                        <a href="pages-icons-cheatsheet">
                          Icons Cheatsheet
                        </a>
                      </li>
                      <li>
                        <a href="pages-contact">Contact</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="clearfix"></div>
            </div>

            <div className="right-side">
              <div className="header-widget">
                <Link
                  to="/login"
                  className="popup-with-zoom-anim log-in-button"
                >
                  <i className="icon-feather-log-in"></i>
                  <span>Log In</span>
                </Link>
                </div>
                <div className="header-widget">
                <Link
                  to="/signup"
                  className="popup-with-zoom-anim log-in-button"
                >
                  <i className="icon-feather-log-in"></i>
                  <span>Register</span>
                </Link>
              </div>

              <span className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* <div className="clearfix"></div> */}
    </div>
  );
};

export default Header;
