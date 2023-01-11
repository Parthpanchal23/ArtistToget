import React from "react";
import {Col, Row} from "antd";  
import TicketList from "components/dashboard/CRM/TicketList";
import Testimonials from "../../../customViews/extras/testimonials";
// import Hero from "components/dashboard/CRM/Hero";
import WelComeCard from "components/dashboard/CRM/WelComeCard";
import Overview from "components/dashboard/CRM/Overview";
import SiteAudience from "components/dashboard/CRM/SiteAudience";
import Auxiliary from "util/Auxiliary";
import TotalRevenueCard from "components/dashboard/CRM/TotalRevenueCard";
import CurrencyCalculator from "components/dashboard/Crypto/CurrencyCalculator";
import ProjectList from "../../../customViews/listType/card/ProjectList";
import Categories from "../../../../components/dashboard/CRM/Categories";

const CRM = () => {
  
  return (
    <>
    
    <Auxiliary>
     {/* <LineIndicator/> */}
      <Row>
        <Col span={12} sm={12} xs={24}>
        
          <div className="gx-card">
            <div className="gx-card-body">
            
              <Row>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                  <WelComeCard/>
                </Col>

              </Row>
            </div>
          </div>
          </Col>
      
        <Col span={12} sm={12} xs={24}>
          <div className="gx-card">
            <div className="gx-card-body">
             
              <Row>
                <Col xl={12} lg={12} md={12} sm={24} xs={24} className="gx-audi-col">
                  <SiteAudience/>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
       
        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
         <Categories/>
         </Col>
    
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <CurrencyCalculator/>
               </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <TotalRevenueCard/>
        </Col>
        
        

        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
         
        <Testimonials/>
        </Col>

        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-1">
          <Row>
            
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <TicketList/>
            </Col>
           
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <Overview/>
            </Col>

            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <ProjectList/>
            </Col>
           
            
          </Row>
        </Col>
      </Row>
    </Auxiliary>
    </>
  );
};

export default CRM;
