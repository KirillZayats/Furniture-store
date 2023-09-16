import React from "react";
import { BlockContentStyle } from "../../../styled/AppStyledComp";
import {
  BlackButtonInfoStyle,
  LinkPage,
  TitleBlockStyle
} from "../../../styled/Main/MainStyledComp";
import {
  ContainerChoseStyle,
  ArticleContainerChoseUsStyle,
  TestChoseStyle
} from "../../../styled/Main/ChoseUs/ListChoseStyledComp";
import ListChose from "./ListChose";
import {NAME_SITE} from "../../../Constants"
const ChoseUs = () => {
  return (
    <BlockContentStyle className={window.location.pathname == `/${NAME_SITE}/` ? "element-animation" : ""}>
      <ArticleContainerChoseUsStyle>
        <ContainerChoseStyle>
          <TitleBlockStyle>Why Choose Us</TitleBlockStyle>
          <TestChoseStyle>
            Welcome to our furniture store, where we believe that a
            well-furnished home is a happy home. We offer a wide selection of
            high-quality furniture for every room in your home, from cozy sofas
            and elegant dining sets to stylish office desks and comfortable
            beds.
          </TestChoseStyle>
          <LinkPage to={`/${NAME_SITE}/products`}>
          <BlackButtonInfoStyle className="button_dark">Shop Now</BlackButtonInfoStyle>
          </LinkPage>
        </ContainerChoseStyle>
        <ListChose />
      </ArticleContainerChoseUsStyle>
    </BlockContentStyle>
  );
};

export default ChoseUs;
