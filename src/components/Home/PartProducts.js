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
  LinkButtonStyle,
} from "../../styled/Main/PartProductStyledComp";
import Card from "./Card";
import { NAME_SITE } from "../../Constants";

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
    <BlockContentStyle className={window.location.pathname == `/${NAME_SITE}/` ? "element-animation" : ""}>
      <ProductsStyle>
        <ArticleContainerStyle>
          <ContainerTitleBlockStyle>
            <TitleBlockStyle>Featured Products</TitleBlockStyle>
            <TextStyle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextStyle>
            <ContainerButtonViewAllUpStyle>
              <LinkButtonStyle to={`/${NAME_SITE}/products`}>
                <ButtonViewAllStyle className="button_white">
                  View all
                </ButtonViewAllStyle>
              </LinkButtonStyle>
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
            <LinkButtonStyle to={`/${NAME_SITE}/products`}>
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
