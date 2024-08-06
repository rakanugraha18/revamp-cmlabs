import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({
  children: slides = [],
  autoSlide = false,
  autoSlideInterval = 3000,
  width = 958,
  height = 400,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              overflow: "hidden",
            }}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between items-center w-full">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white -ml-16"
          style={{ left: "-30px" }}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white -mr-16"
          style={{ right: "-30px" }}
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3  ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Carousel;
