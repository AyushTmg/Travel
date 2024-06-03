import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/_globalcomponents/Navbar";
import Footer from "../components/_globalcomponents/Footer";

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}

      <Outlet />

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
