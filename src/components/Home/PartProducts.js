import React from "react";
import { BlockContentStyle } from "../../styled/AppStyledComp";
import {
  TextStyle,
  ArticleContainerStyle,
  TitleBlockStyle,
} from "../../styled/Main/MainStyledComp";
import { styled } from "styled-components";
import Card from "./Card";

const ContainterCardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const ProductsStyle = styled.div`
  padding-top: 0.1px;
`;
const PartProducts = () => {
  return (
    <BlockContentStyle>
      <ProductsStyle>
        <ArticleContainerStyle>
          <TitleBlockStyle>Featured Products</TitleBlockStyle>
          <TextStyle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TextStyle>

          <ContainterCardsStyle>
            <Card />
            <Card />
            <Card />
            <Card />
          </ContainterCardsStyle>
        </ArticleContainerStyle>
      </ProductsStyle>
    </BlockContentStyle>
  );
};

export default PartProducts;
