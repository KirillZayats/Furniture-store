import React, {useEffect} from "react";
import { MainStyle } from "../styled/Main/MainStyledComp";
import PartProducts from "../components/Home/PartProducts";
import PopularProducts from "../components/Home/PopularProducts";
import Sale from "../components/Home/Sale";
import ListCategories from "../components/Home/ListСategories";

const Products = () => {

  useEffect(() => {
    console.log(window.location.pathname);
  }, )

  return (
    <MainStyle>
      <ListCategories/>
      <PartProducts />
      <Sale />
      <PopularProducts />
    </MainStyle>
  );
};

export default Products;
