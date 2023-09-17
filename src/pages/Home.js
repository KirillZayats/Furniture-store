import React, { useEffect } from "react";
import { MainStyle } from "../styled/Main/MainStyledComp";

import Description from "../components/Home/Description";
import AboutUs from "../components/Home/AboutUs";
import ChoseUs from "../components/Home/Chose/ChoseUs";
import PartProducts from "../components/Home/PartProducts";
import PopularProducts from "../components/Home/PopularProducts";
import Sale from "../components/Home/Sale";
import Contacts from "../components/Home/Contacts";
const Home = () => {

  return (
    <MainStyle>
      <Description />
      <AboutUs />
      <ChoseUs/>
      <PartProducts />
      <Sale />
      <PopularProducts />
      <Contacts />
    </MainStyle>
  );
};

export default Home;
