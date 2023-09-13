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
  ContainerInfoDescriptionStyle,
  ContainerFlexDescriptionsStyle,
} from "../../styled/Main/MainStyledComp";

const Description = () => {
  return (
    <BlockContentStyle>
      <ArticleContainerStyle>
        <ContainerFlexDescriptionsStyle>
          <TitleMainBlockStyle>
            Transform Your Home with Our Stunning
            <BoldTextStyle> Furniture Collection</BoldTextStyle>
          </TitleMainBlockStyle>
          <ContainerInfoDescriptionStyle>
            <TextStyle>
              Welcome to our furniture store, where we believe that a
              well-furnished home is a happy home. We offer a wide selection of
              high-quality furniture for every room in your home, from cozy
              sofas and elegant dining sets to stylish office desks and
              comfortable beds.
            </TextStyle>
            <BlockButtonsStyle>
              <BlackButtonInfoStyle className="button_dark">Shop Now</BlackButtonInfoStyle>
              <WhiteButtonInfoStyle className="button_white">Learn More</WhiteButtonInfoStyle>
            </BlockButtonsStyle>
          </ContainerInfoDescriptionStyle>
          <ImageMainBlockStyle>
          <ImageMainContainerStyle/>
          </ImageMainBlockStyle>
        </ContainerFlexDescriptionsStyle>
      </ArticleContainerStyle>
    </BlockContentStyle>
  );
};

export default Description;
