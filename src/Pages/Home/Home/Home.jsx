import React from "react";
import Banner from "../Banner/Banner";
import LatestContext from "../../../Component/LatestContext/LatestContext";
import Features from "../../ExtraSection/Features";
import Services from "../../ExtraSection/Services";
import Statistics from "../../ExtraSection/Statistics";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestContext></LatestContext>
      <Features></Features>
      <Statistics></Statistics>
      <Services></Services>
    </div>
  );
};

export default Home;
