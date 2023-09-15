import React, { useEffect } from "react";
import { MainStyle } from "../styled/Main/MainStyledComp";
import AboutUsComponents from "../components/Home/AboutUs";
import ChoseUs from "../components/Home/Chose/ChoseUs";
import { useLocation } from "react-router-dom";

const AboutUs = () => {

  return (
    <MainStyle>
      <AboutUsComponents />
      <ChoseUs />
    </MainStyle>
  );
};

export default AboutUs;
