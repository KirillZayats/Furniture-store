import React from "react";
import { BlockContentStyle } from "../../../styled/AppStyledComp";
import {
  BlackButtonInfoStyle,
  TitleBlockStyle
} from "../../../styled/Main/MainStyledComp";
import {
  ContainerChoseStyle,
  TitleChoseContainerStyle,
  ArticleContainerChoseUsStyle,
  TestChoseStyle
} from "../../../styled/Main/ChoseUs/ListChoseStyledComp";
import ListChose from "./ListChose";

const ChoseUs = () => {
  return (
    <BlockContentStyle>
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
          <BlackButtonInfoStyle className="button_dark">Shop Now</BlackButtonInfoStyle>
        </ContainerChoseStyle>
        <ListChose />
      </ArticleContainerChoseUsStyle>
    </BlockContentStyle>
  );
};

export default ChoseUs;
