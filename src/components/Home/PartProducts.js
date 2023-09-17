import React, { useEffect, useState } from "react";
import { BlockContentStyle } from "../../styled/AppStyledComp";
import { ArticleContainerStyle } from "../../styled/Main/MainStyledComp";
import {
  ProductsStyle,
  ContainterCardsStyle,
  ButtonViewAllStyle,
  ContainerButtonViewAllDownStyle,
  ContainerButtonViewAllUpStyle,
  ContainerTitleBlockStyle,
  TitleBlockStyle,
  TextStyle,
  LinkButtonStyle,
} from "../../styled/Main/PartProductStyledComp";
import Card from "./Card";
import { NAME_SITE } from "../../Constants";
import { useSelector } from "react-redux";

const PartProducts = () => {
  const { products, isLoadingProducts } = useSelector(
    (state) => state.products
  );
  const { category } = useSelector(
    (state) => state.category
  );
  const [partProducts, setPartProducts] = useState([]);
  const [productFeatured, setProductFeatured] = useState([]);

  useEffect(() => {
    if(window.location.href.includes("#all_featured")) {
      setPartProducts(
        products.filter((product) => product.catalog.includes("featured"))
      );
    } else {
      window.innerWidth < 1024
      ? setPartProducts(productFeatured.slice(0, 4))
      : setPartProducts(productFeatured.slice(0, 8));
    }

}, [productFeatured]);

  useEffect(() => {
    if (isLoadingProducts) {
      setProductFeatured(
        products.filter((product) => product.catalog.includes("featured"))
      );
    }
  }, [isLoadingProducts]);

  useEffect(() => {
    category === "All" ?
    setPartProducts (productFeatured)
     : 
    setPartProducts(
      productFeatured.filter((product) => product.category.includes(category))
    );
  }, [category])

  const getAllProducts = () => {
    setPartProducts(productFeatured)
  }

  return (
    <BlockContentStyle>
      <ProductsStyle>
        <ArticleContainerStyle>
          <ContainerTitleBlockStyle>
            <TitleBlockStyle>Featured Products</TitleBlockStyle>
            <TextStyle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextStyle>
            <ContainerButtonViewAllUpStyle>
              <LinkButtonStyle to={`/${NAME_SITE}/products?#all_featured`} onClick={getAllProducts}>
                <ButtonViewAllStyle className="button_white">
                  View all
                </ButtonViewAllStyle>
              </LinkButtonStyle>
            </ContainerButtonViewAllUpStyle>
          </ContainerTitleBlockStyle>
          <ContainterCardsStyle>
            {partProducts.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </ContainterCardsStyle>
          <ContainerButtonViewAllDownStyle>
            <LinkButtonStyle to={`/${NAME_SITE}/products?#all_featured`} onClick={getAllProducts}>
              <ButtonViewAllStyle className="button_white">
                View all
              </ButtonViewAllStyle>
            </LinkButtonStyle>
          </ContainerButtonViewAllDownStyle>
        </ArticleContainerStyle>
      </ProductsStyle>
    </BlockContentStyle>
  );
};

export default PartProducts;
