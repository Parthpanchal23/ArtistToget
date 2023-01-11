import React from "react";
import {Layout} from "antd";
import Fdata from "../../components/dashboard/CRM/Fdata";
import Sidebar from "../Sidebar/index";
import HorizontalDefault from "../Topbar/HorizontalDefault/index";



import Flogo from "components/dashboard/CRM/Fcontent";         
import Topbar from "../Topbar/index";
import {footerText} from "util/config";
import App from "routes/index";

import {useSelector} from "react-redux";
import {
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_FIXED,
  TAB_SIZE
} from "../../constants/ThemeSetting";

import {useRouteMatch} from "react-router-dom";

const {Content, Footer} = Layout;

const MainApp = () => {

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
export default MainApp;

