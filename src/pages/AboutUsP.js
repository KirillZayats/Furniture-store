import React from "react";
import { MainStyle } from "../styled/Main/MainStyledComp";
import AboutUs from "../components/Home/AboutUs";
import ChoseUs from "../components/Home/Chose/ChoseUs";

const AboutUsP = () => {
  return (
    <MainStyle>
      <AboutUs />
      <ChoseUs />
    </MainStyle>
  );
};

export default AboutUsP;
