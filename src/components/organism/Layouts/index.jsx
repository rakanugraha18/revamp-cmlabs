import React from "react";
import Navbar from "../../organism/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">{children}</div>
    </div>
  );
};

export default Layout;
