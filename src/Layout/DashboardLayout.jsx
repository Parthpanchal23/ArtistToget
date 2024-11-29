import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

const DashboardLayout = () => {
  return (
    <div>
        <div id="wrapper">

      <Header />
      <div className="dashboard-container">
      <SideBar/>
      <Outlet/>
      </div>
        </div>
    </div>
  );
};

export default DashboardLayout;
