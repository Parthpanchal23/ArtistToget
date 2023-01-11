import React from 'react';
import {Layout,Col,Row} from "antd";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Sidebar from './Sidebar/index';
import HorizontalDefault from "./Topbar/HorizontalDefault/index";
import Fdata from "./../components/dashboard/CRM/Fdata";
import WelComeCard from '../components/dashboard/CRM/WelComeCard';
import Auxiliary from '../util/Auxiliary';
import SiteAudience from '../components/dashboard/CRM/SiteAudience';
import Categories from '../components/dashboard/CRM/Categories';
import CurrencyCalculator from '../components/dashboard/Crypto/CurrencyCalculator';
import TotalRevenueCard from '../components/dashboard/CRM/TotalRevenueCard';
import Testimonials from '../routes/customViews/extras/testimonials';
import TicketList from '../components/dashboard/CRM/TicketList';
import Overview from '../components/dashboard/CRM/Overview';
import {
    NAV_STYLE_DEFAULT_HORIZONTAL,
    NAV_STYLE_FIXED,
    TAB_SIZE
  } from "./../constants/ThemeSetting";
  import Flogo from "components/dashboard/CRM/Fcontent";    
  import {useRouteMatch} from "react-router-dom";     
import Topbar from "./Topbar/index";
import {footerText} from "util/config";
import App from "routes/index";
// import {Col, Row} from "antd";  

const {Content, Footer} = Layout;
const Homelog = () => {
    const {width, navStyle} = useSelector(({settings}) => settings);
  const match = useRouteMatch();
  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      default:
        return '';
    }
  };
  const getNavStyles = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL :
        return <HorizontalDefault/>;
      case NAV_STYLE_FIXED :
        return <Topbar/>;
      default :
        return null;
    }
  };

  const getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar/>;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED :
        return <Sidebar/>;
      default :
        return null;
    }
};
    
return (
    <Layout className="gx-app-layout">
      {getSidebar(navStyle, width)}
      <Layout>
        {getNavStyles(navStyle)}
        <Content className={`gx-layout-content ${getContainerClass(navStyle)} `}>
          <App match={match}/>
         
          <div className="gx-main-content-wrapper">
            <Auxiliary>
              <Row>
              <Col span={24} sm={24} xs={24}>
              <div className="gx-card">
                   
                   <div className="gx-card-body">
              <center>Let create yoyr account</center>
              
              <Col span={12} sm={12} xs={24}>
                  <div className="gx-card">
                   
                    <div className="gx-card-body">
                  
                         <center><Link to="./sigin">Login</Link></center>
                       
                    </div>
                  </div>
                </Col>
              
                <Col span={12} sm={12} xs={24}>
                  <div className="gx-card">
                    <div className="gx-card-body">
                   
                        <center><Link to="./signup">registration</Link></center>
                        
                    </div>
                  </div>
                </Col>
                </div></div>
                </Col>
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
                
                  </Row>
                </Col>
              </Row>
              
            </Auxiliary>
          </div>
          <Footer>
            <div className="gx-layout-footer-content">
              <Flogo/>
              <Fdata/>
              {footerText}
            </div>
          </Footer>
        </Content>
      </Layout>
  </Layout>
)
};
export default Homelog;
