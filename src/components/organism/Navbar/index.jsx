import React, { useState, useEffect } from "react";
import { GrFavorite, GrLocation, GrUser, GrCart } from "react-icons/gr";
import SearchBox from "../../molecules/SearchBox";
import { Link } from "react-router-dom";
import smartliving from "../../../assets/Smartliving.svg";

const Navbar = () => {
  return (
    <div className="py-3 flex flex-col items-center">
      <nav
        className={` w-full scroll-smooth bg-white  pb-4 flex justify-between items-center z-50 transition-shadow duration-300 self-stretch`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <div className="mr-6">
              <SearchBox />
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <Link to="/" className="text-xl font-bold">
              <img
                src={smartliving}
                alt="Login"
                className="w-[210px] h-[57px]"
              />{" "}
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <GrLocation className="text-base mx-auto" />
              <span className="text-[10px]">Store Location</span>
            </div>
            <div className="text-center">
              <GrUser className="text-base mx-auto" />
              <span className="text-[10px]">Profile</span>
            </div>
            <div className="text-center">
              <GrFavorite className="text-base mx-auto" />
              <span className="text-[10px]">Wishlist</span>
            </div>
            <div className="text-center">
              <GrCart className="text-base mx-auto" />
              <span className="text-[10px]">Shopping Cart</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
