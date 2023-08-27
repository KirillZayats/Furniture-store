import React from "react";
import { BlockContentStyle } from "../../styled/AppStyledComp";
import {
  TextStyle,
  ArticleContainerStyle,
  TitleBlockStyle,
} from "../../styled/Main/MainStyledComp";
import {
  ProductsStyle,
  ContainterCardsStyle,
  ButtonViewAllStyle,
  ContainerButtonStyle
} from "../../styled/Main/PartProductStyledComp";
import Card from "./Card";


const PartProducts = () => {
  return (
    <BlockContentStyle>
      <ProductsStyle>
        <ArticleContainerStyle>
          <TitleBlockStyle>Popular Products</TitleBlockStyle>
          <TextStyle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TextStyle>
          <ContainterCardsStyle>
            <Card />
            <Card />
            <Card />
            <Card />
          </ContainterCardsStyle>
          <ContainerButtonStyle>
          <ButtonViewAllStyle>View all</ButtonViewAllStyle>
          </ContainerButtonStyle>
        </ArticleContainerStyle>
      </ProductsStyle>
    </BlockContentStyle>
  );
};

export default PartProducts;
