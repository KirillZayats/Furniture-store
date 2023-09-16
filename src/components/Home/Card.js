import React from "react";
import {
  CardButtonCartStyle,
  CardButtonDetailsStyle,
  CardCategoriesStyle,
  CardFigcaptionStyle,
  CardImageStyle,
  CardStyle,
  ContainerFigcaptionStyle,
  ContainerButtonStyle,
  LinkButtonStyle
} from "../../styled/Main/CardStyledComp";
import ImageLamps from "../../resource/images/lamps.jpg";
import {NAME_SITE} from "../../Constants"
const Card = () => {
  return (
    <CardStyle className="block_product">
      <CardImageStyle src={ImageLamps}/>
      <ContainerFigcaptionStyle>
      <CardFigcaptionStyle>Right Hand Fabric</CardFigcaptionStyle>
      <CardFigcaptionStyle className="price">$55</CardFigcaptionStyle>
      </ContainerFigcaptionStyle>
      <CardCategoriesStyle>Desk decor</CardCategoriesStyle>
      <ContainerButtonStyle>
        <LinkButtonStyle to={`/${NAME_SITE}/details`}>
        <CardButtonDetailsStyle className="button_dark">Details</CardButtonDetailsStyle>
        </LinkButtonStyle>
      <CardButtonCartStyle className="button_white">Add to cart</CardButtonCartStyle>
      </ContainerButtonStyle>
    </CardStyle>
  );
};

export default Card;
