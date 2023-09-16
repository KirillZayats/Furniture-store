import React, {useEffect, useState} from "react";
import { MainStyle } from "../styled/Main/MainStyledComp";
import PartProducts from "../components/Home/PartProducts";
import PopularProducts from "../components/Home/PopularProducts";
import Sale from "../components/Home/Sale";
import ListCategories from "../components/Home/ListСategories";
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
const Products = () => {

  const {products} = useSelector((state) => state.products);
  const {categories} = useSelector((state) => state.categories);

  const { getDataProducts } = useAction();
  const [productFeatured, setProductFeatured] = useState(products);

  useEffect(() =>{
    getDataProducts("products")
    getDataProducts("categories")

    console.log(products);
    // console.log(productFeatured);
    console.log(categories);

    // console.log(productFeatured.filter(product => product.catalog.includes("featured")));
    // fetchUrl("http://localhost:3000/products");
  }, [])

  return (
    <MainStyle>
      <ListCategories/>
      <PartProducts />
      <Sale />
      <PopularProducts />
    </MainStyle>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state.products);
//   return {
//     products: state.products
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUrl: url => dispatch(getDataProducts(url))
//   };
// }


export default Products;
