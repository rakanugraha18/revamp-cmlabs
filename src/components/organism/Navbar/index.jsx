import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-smartliving.png";
import IconCart from "../../atoms/IconCart";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold">
          <img src={logo} alt="Login" className="w-40" />
        </Link>
      </div>
      <div className="flex space-x-4">
        <IconCart />
        <Link to="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link to="/login" className="text-gray-600 hover:text-gray-900">
          Login
        </Link>
        {/* Tambahkan menu lainnya di sini */}
      </div>
    </nav>
  );
};

export default Navbar;
