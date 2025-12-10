import React from "react";
import Banner from "../Banner/Banner";
import LatestContext from "../../../Component/LatestContext/LatestContext";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <LatestContext></LatestContext>
    </div>
  );
};

export default Home;
