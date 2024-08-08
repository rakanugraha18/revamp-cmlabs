import React, { useState } from "react";
import { GrFavorite, GrUser, GrCart, GrLocation } from "react-icons/gr";
import SearchBox from "../../molecules/SearchBox";
import { Link } from "react-router-dom";
import smartliving from "../../../assets/Smartliving.svg";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const categories = [
  "LIVING",
  "DINING",
  "KITCHEN",
  "BEDROOM",
  "BATHROOM",
  "LIGHTING",
  "OFFICE",
  "DECOR",
  "OUTDOOR",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className=" w-full bg-white md:py-[15px] flex flex-col md:flex-row justify-between items-center z-50 transition-shadow duration-300">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-2xl md:hidden mr-4"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <IoMdClose /> : <HiMenu />}
            </button>
            <div className="mr-6">
              <SearchBox />
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <Link to="/" className="text-xl font-bold">
              <img
                src={smartliving}
                alt="SmartLiving"
                className="w-[210px] h-[57px]"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-center hidden md:block">
              <GrLocation className="text-base mx-auto" />
              <span className="text-[10px] hidden md:block">Location</span>
            </div>
            <div className="text-center md:block">
              <Link to="/login">
                <GrUser className="text-base mx-auto" />
                <span className="text-[10px] hidden md:block">Profile</span>
              </Link>
            </div>
            <div className="text-center hidden md:block">
              <GrFavorite className="text-base mx-auto" />
              <span className="text-[10px] hidden md:block">Wishlist</span>
            </div>
            <div className="text-center md:block">
              <GrCart className="text-base mx-auto" />
              <span className="text-[10px] hidden md:block">Shopping Cart</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-white md:py-[15px]">
        <div className="hidden container mx-auto md:flex justify-between items-center self-stretch">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-700 hover:text-[#167a69] font-semibold uppercase mx-2 font-poppins"
              style={{ fontSize: "16px" }}
            >
              {category}
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <div className=" hidden md:flex pt-[30px] w-full border-b-[1px] border-black max-w-screen-2xl"></div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="justify-between">
          <div className="pt-4">
            <Link to="/" className="text-xl font-bold">
              <img
                src={smartliving}
                alt="SmartLiving"
                className="p-2 max-w-[210px] max-h-[57px]"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-2xl absolute top-8 right-4"
              aria-label="Close Menu"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col items-start px-4">
            {categories.map((category, index) => (
              <a
                key={index}
                href={`#${category.toLowerCase()}`}
                className="text-gray-700 hover:text-[#167a69] my-6 font-semibold uppercase mb-2"
                style={{ fontSize: "16px" }}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
