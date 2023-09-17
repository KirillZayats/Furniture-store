import React, { useState, useEffect } from "react";
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
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
      if(window.location.href.includes("#all_popular")) {
        setPartProducts(
          products.filter((product) => product.catalog.includes("popular"))
        );
      } else {
        window.innerWidth < 1024
        ? setPartProducts(popularProducts.slice(0, 4))
        : setPartProducts(popularProducts.slice(0, 8));
      }

  }, [popularProducts]);

  useEffect(() => {
    if (isLoadingProducts) {
      setPopularProducts(
        products.filter((product) => product.catalog.includes("popular"))
      );
    }
  }, [isLoadingProducts]);

  useEffect(() => {
    category === "All" ?
    setPartProducts (popularProducts)
     : 
    setPartProducts(
      popularProducts.filter((product) => product.category.includes(category))
    );
  }, [category])

  const getAllProducts = () => {
    setPartProducts(popularProducts)
  }

  return (
    <BlockContentStyle>
      <ProductsStyle>
        <ArticleContainerStyle>
          <ContainerTitleBlockStyle>
            <TitleBlockStyle>Popular Products</TitleBlockStyle>
            <TextStyle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextStyle>
            <ContainerButtonViewAllUpStyle>
              <LinkButtonStyle to={`/${NAME_SITE}/products?#all_popular`}>
                <ButtonViewAllStyle className="button_white" onClick={getAllProducts}>
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
            <LinkButtonStyle to={`/${NAME_SITE}/products?#all_popular`}>
              <ButtonViewAllStyle className="button_white" onClick={getAllProducts}>
                View all
              </ButtonViewAllStyle>
            </LinkButtonStyle>{" "}
          </ContainerButtonViewAllDownStyle>
        </ArticleContainerStyle>
      </ProductsStyle>
    </BlockContentStyle>
  );
};

export default PartProducts;
