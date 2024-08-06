import React from "react";

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

const Categories = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex justify-between items-center self-stretch">
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
      {/* <div className="border-t border-black mt-2"></div> */}
    </div>
  );
};

export default Categories;
