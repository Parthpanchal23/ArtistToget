import React, { useEffect, useState } from "react";
import FeatureItem from "./FeatureItem";
import Heding from "../../Heding";
import { useHttpClient } from "../../../lib/http-hook";
const FeatureJob = ({title}) => {
  const DefaultData = [
    {
      Title: "Bilingual Event Support Specialist",
      href: "/",
      img: "./images/company-logo-01.png",
      content: (
        <ul>
          <li>
            <i className="icon-material-outline-business"></i> Hexagon{" "}
            <div
              className="verified-badge"
              title="Verified Employer"
              data-tippy-placement="top"
            ></div>
          </li>
          <li>
            <i className="icon-material-outline-location-on"></i> San Francissco
          </li>
          <li>
            <i className="icon-material-outline-business-center"></i> Full Time
          </li>
          <li>
            <i className="icon-material-outline-access-time"></i> 2 days ago
          </li>
        </ul>
      ),
    },
    {
      Title: "Competition Law Officer",
      href: "/",
      img: "./images/company-logo-05.png",
      content: (
        <ul>
          <li>
            <i className="icon-material-outline-business"></i> Laxo
          </li>
          <li>
            <i className="icon-material-outline-location-on"></i> San Francissco
          </li>
          <li>
            <i className="icon-material-outline-business-center"></i> Full Time
          </li>
          <li>
            <i className="icon-material-outline-access-time"></i> 2 days ago
          </li>
        </ul>
      ),
    },
    {
      Title: "Barista and Cashier",
      href: "/",
      img: "./images/company-logo-02.png",
      content: (
        <ul>
          <li>
            <i className="icon-material-outline-business"></i> Coffee
          </li>
          <li>
            <i className="icon-material-outline-location-on"></i> San Francissco
          </li>
          <li>
            <i className="icon-material-outline-business-center"></i> Full Time
          </li>
          <li>
            <i className="icon-material-outline-access-time"></i> 2 days ago
          </li>
        </ul>
      ),
    },
    {
      Title: "Restaurant General Manager",
      href: "/",
      img: "./images/company-logo-03.png",
      content: (
        <ul>
          <li>
            <i className="icon-material-outline-business"></i> King{" "}
            <div
              className="verified-badge"
              title="Verified Employer"
              data-tippy-placement="top"
            ></div>
          </li>
          <li>
            <i className="icon-material-outline-location-on"></i> San Francissco
          </li>
          <li>
            <i className="icon-material-outline-business-center"></i> Full Time
          </li>
          <li>
            <i className="icon-material-outline-access-time"></i> 2 days ago
          </li>
        </ul>
      ),
    },
    {
      Title: "International Marketing Coordinator",
      href: "/",
      img: "./images/company-logo-05.png",
      content: (
        <ul>
          <li>
            <i className="icon-material-outline-business"></i> Skyist
          </li>
          <li>
            <i className="icon-material-outline-location-on"></i> San Francissco
          </li>
          <li>
            <i className="icon-material-outline-business-center"></i> Full Time
          </li>
          <li>
            <i className="icon-material-outline-access-time"></i> 2 days ago
          </li>
        </ul>
      ),
    },
  ];

  const[JobData,setJobData]=useState([]);
  const {isloading,error,sendRequest,clearError}= useHttpClient()
  
  useEffect(()=>{
    const fetchUser = async ()=>{
      const response =await sendRequest('http://localhost:5000/api/v1/post/');
      if(!response.status ==='Sucess') {
        throw new Error(response.message);
      }
      if(response?.data)
      {

        setJobData(response?.data)
      }
    }
    fetchUser();
  },[])

  return (
    <div>
      <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
             
                <Heding  title={title?title:""}>
                <a
                  href="jobs-list-layout-full-page-map.html"
                  className="headline-link"
                >
                  Browse All Jobs
                </a>
                </Heding>
                { isloading &&<p>Loading ...</p>} 
                {JobData && JobData?.length > 0 &&(
              <div className={`listings-container compact-list-layout margin-top-35 ${JobData?.length == 0&&"flex justify-center align-center"}`} key={JobData}>

                {JobData&&JobData?.length > 0 ?
                  JobData?.map((item, i) => <FeatureItem data={item} key={i} />):(<p className="text-slate-600 "> No Jobs Found</p>)}
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureJob;
