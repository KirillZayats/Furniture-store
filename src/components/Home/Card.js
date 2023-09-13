import React from "react";
import {
  CardButtonStyle,
  CardCategoriesStyle,
  CardFigcaptionStyle,
  CardImageStyle,
  CardStyle,
  ContainerFigcaptionStyle
} from "../../styled/Main/CardStyledComp";
import ImageLamps from "../../resource/images/lamps.jpg";

const Card = () => {
  return (
    <CardStyle>
      <CardImageStyle src={ImageLamps}/>
      <ContainerFigcaptionStyle>
      <CardFigcaptionStyle>Right Hand Fabric</CardFigcaptionStyle>
      <CardFigcaptionStyle>$55</CardFigcaptionStyle>
      </ContainerFigcaptionStyle>
      <CardCategoriesStyle>Desk decor</CardCategoriesStyle>
      <CardButtonStyle className="button_white">Add to cart</CardButtonStyle>
    </CardStyle>
  );
};

export default Card;
