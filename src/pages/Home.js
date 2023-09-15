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

  const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }

  const loadPage = () => {
    let options = { threshold: [0.3] };
    if(window.innerWidth < 1024) {
      options = { threshold: [0.2] };
    }
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(".element-animation");
    for (let elm of elements) {
      observer.observe(elm);
    }
  };

  return (
    <MainStyle onLoad={loadPage}>
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
