import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const WebsiteLayout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default WebsiteLayout;
