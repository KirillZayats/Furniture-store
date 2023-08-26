import React from "react";
import { BlockContentStyle } from "../styled/AppStyledComp";
import { MainStyle } from "../styled/Main/MainStyledComp";

import Description from "../components/Home/Description";
import AboutUs from "../components/Home/AboutUs";
import ChoseUs from "../components/Home/Chose/ChoseUs";
import PartProducts from "../components/Home/PartProducts";

const Home = () => {
  return (
    <MainStyle>
      <Description/>
      <AboutUs/>
      <ChoseUs/>
      <PartProducts/>
      <BlockContentStyle/>
      <BlockContentStyle/>
      <BlockContentStyle/>
      <BlockContentStyle/>
    </MainStyle>
  );
};

export default Home;
