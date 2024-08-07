import React from "react";
import Recomendation from "../components/organism/Recomendation";
import Slider from "../components/organism/Slider";

function HomePage() {
  return (
    <div>
      <div className="flex justify-center pb-[14px]">
        <Slider />
      </div>
      <Recomendation />
    </div>
  );
}

export default HomePage;
