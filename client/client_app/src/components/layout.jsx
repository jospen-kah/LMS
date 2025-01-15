import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const WebsiteLayout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default WebsiteLayout;
