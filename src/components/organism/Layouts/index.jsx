import React from "react";
import Navbar from "../../organism/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="md:pt-32 pt-40">{children}</div>
    </div>
  );
};

export default Layout;
