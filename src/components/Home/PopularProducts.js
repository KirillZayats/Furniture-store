import React from "react";
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
} from "../../styled/Main/PartProductStyledComp";
import Card from "./Card";

const PartProducts = () => {
  const addCard = () => {
    if (window.innerWidth >= 1024) {
      return [
        <Card key="5" />,
        <Card key="6" />,
        <Card key="7" />,
        <Card key="8" />,
      ];
    }
  };

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
              <ButtonViewAllStyle>View all</ButtonViewAllStyle>
            </ContainerButtonViewAllUpStyle>
          </ContainerTitleBlockStyle>
          <ContainterCardsStyle>
            <Card />
            <Card />
            <Card />
            <Card />
            {addCard()}
          </ContainterCardsStyle>
          <ContainerButtonViewAllDownStyle>
            <ButtonViewAllStyle>View all</ButtonViewAllStyle>
          </ContainerButtonViewAllDownStyle>
        </ArticleContainerStyle>
      </ProductsStyle>
    </BlockContentStyle>
  );
};

export default PartProducts;
