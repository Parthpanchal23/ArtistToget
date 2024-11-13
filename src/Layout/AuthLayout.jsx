import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const AuthLayout = (props) => {
  return (
    <div>
      <Header />
      {/* {props?.children} */}
      <Outlet/>
      <Footer />
    </div>
  );
};

export default AuthLayout;
