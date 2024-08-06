import React from "react";
import Navbar from "../../organism/Navbar";
import Categories from "../Navbar/Categories";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Categories />
      <div className="pb-10">{children}</div>
    </div>
  );
};

export default Layout;
