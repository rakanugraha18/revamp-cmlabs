import React from "react";
import { Carousel } from "flowbite-react";
import Slider1 from "../../../assets/images/slider/Slider1.png";
import Slider2 from "../../../assets/images/slider/Slider2.png";
import Slider3 from "../../../assets/images/slider/Slider3.png";
import Slider4 from "../../../assets/images/slider/Slider4.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const sliderImages = [Slider1, Slider2, Slider3, Slider4];

  return (
    <div className="flex justify-center items-center h-[400px] w-[958px] mx-auto">
      <div className="relative w-full h-full">
        <Carousel className="relative w-full h-full">
          {sliderImages.map((image, index) => (
            <div key={index} className="relative w-full h-full">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
