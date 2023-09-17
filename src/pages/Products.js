import React from "react";
import { MainStyle } from "../styled/Main/MainStyledComp";
import PartProducts from "../components/Home/PartProducts";
import PopularProducts from "../components/Home/PopularProducts";
import Sale from "../components/Home/Sale";
import ListCategories from "../components/Home/ListСategories";
const Products = () => {

  return (
    <MainStyle>
      <ListCategories/>
      <PartProducts/>
      <Sale />
      <PopularProducts/>
    </MainStyle>
  )
};

export default Products;
