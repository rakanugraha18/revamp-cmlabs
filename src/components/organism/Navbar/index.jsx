import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/LogoSmartLiving.svg";
import IconCart from "../../atoms/IconCart";
import SearchBox from "../../molecules/SearchBox";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <div className="flex items-center space-x-4">
        <SearchBox />
      </div>
      <div className="flex items-center justify-center flex-grow">
        <Link to="/" className="text-xl font-bold">
          <img src={logo} alt="Login" className="w-[210px] h-[57px]" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <IconCart />
        <Link to="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link to="/login" className="text-gray-600 hover:text-gray-900">
          Login
        </Link>
        <div className="flex items-center"></div>
      </div>
    </nav>
  );
};

export default Navbar;
