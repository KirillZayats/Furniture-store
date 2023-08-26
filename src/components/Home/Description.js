import React from "react";
import { BlockContentStyle } from "../../styled/AppStyledComp";
import {
  TextStyle,
  BoldTextStyle,
  TitleMainBlockStyle,
  ArticleContainerStyle,
  WhiteButtonInfoStyle,
  BlackButtonInfoStyle,
  BlockButtonsStyle,
  ImageMainBlockStyle,
  ImageMainContainerStyle,
} from "../../styled/Main/MainStyledComp";

const Description = () => {
  return (
    <BlockContentStyle>
      <ArticleContainerStyle>
        <TitleMainBlockStyle>
          Transform Your Home with Our Stunning
          <BoldTextStyle> Furniture Collection</BoldTextStyle>
        </TitleMainBlockStyle>
        <TextStyle>
          Welcome to our furniture store, where we believe that a well-furnished
          home is a happy home. We offer a wide selection of high-quality
          furniture for every room in your home, from cozy sofas and elegant
          dining sets to stylish office desks and comfortable beds.
        </TextStyle>
        <BlockButtonsStyle>
          <BlackButtonInfoStyle>Shop Now</BlackButtonInfoStyle>
          <WhiteButtonInfoStyle>Learn More</WhiteButtonInfoStyle>
        </BlockButtonsStyle>
        <ImageMainBlockStyle>
          <ImageMainContainerStyle />
        </ImageMainBlockStyle>
      </ArticleContainerStyle>
    </BlockContentStyle>
  );
};

export default Description;
