import React from "react";
import Recomendation from "../components/organism/Recomendation";
import Slider from "../components/organism/Slider";
import CollectionColor from "../components/organism/CollectionColor";
import Articles from "../components/organism/Articles";
import Subscription from "../components/organism/Subscription";

function HomePage() {
  return (
    <div>
      <div className="flex justify-center pb-[14px]">
        <Slider />
      </div>
      <Recomendation />
      <CollectionColor />
      <Articles />
      <Subscription />
    </div>
  );
}

export default HomePage;
