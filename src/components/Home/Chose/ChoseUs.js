import React from "react";
import { BlockContentStyle } from "../../../styled/AppStyledComp";
import {
  TextStyle,
  ArticleContainerStyle,
  BlackButtonInfoStyle,

} from "../../../styled/Main/MainStyledComp";
import {
  ContainerChoseStyle,
  TitleChoseContainerStyle,
} from "../../../styled/Main/ListChoseStyledComp";
import ListChose from "./ListChose";

const ChoseUs = () => {
  return (
    <BlockContentStyle>
      <ArticleContainerStyle>
        <ContainerChoseStyle>
          <TitleChoseContainerStyle>Why Choose Us</TitleChoseContainerStyle>
          <TextStyle>
            Welcome to our furniture store, where we believe that a
            well-furnished home is a happy home. We offer a wide selection of
            high-quality furniture for every room in your home, from cozy sofas
            and elegant dining sets to stylish office desks and comfortable
            beds.
          </TextStyle>
          <BlackButtonInfoStyle>Shop Now</BlackButtonInfoStyle>
        </ContainerChoseStyle>
        <ListChose />
      </ArticleContainerStyle>
    </BlockContentStyle>
  );
};

export default ChoseUs;
