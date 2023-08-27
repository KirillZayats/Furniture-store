import React from "react";
import {
  CardButtonStyle,
  CardCategoriesStyle,
  CardFigcaptionStyle,
  CardImageStyle,
  CardStyle,
} from "../../styled/Main/CardStyledComp";
import ImageLamps from "../../resource/images/lamps.jpg";

const Card = () => {
  return (
    <CardStyle>
      <CardImageStyle src={ImageLamps}/>
      <CardFigcaptionStyle>Right Hand Fabric</CardFigcaptionStyle>
      <CardCategoriesStyle>Desk decor</CardCategoriesStyle>
      <CardButtonStyle>Add to cart</CardButtonStyle>
    </CardStyle>
  );
};

export default Card;
