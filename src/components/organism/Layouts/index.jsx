import React from "react";
import Navbar from "../../organism/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="md:pb-10">{children}</div>
    </div>
  );
};

export default Layout;
