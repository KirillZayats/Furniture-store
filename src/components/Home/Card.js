import React from "react";
import { styled } from "styled-components";
import ImageLamps from "../../resource/images/lamps.jpg";

const CardStyle = styled.div``;
const CardImageStyle = styled.img`
  width: 100%;
  height: 300px;
  background-image: url(${ImageLamps});
  background-position: center;
  background-size: cover;
`;
const CardFigcaptionStyle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 10px;
`;
const CardCategoriesStyle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 10px;
`;
const CardButtonStyle = styled.button`
  width: 100%;
  height: 35px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  background: #fff;
`;

const Card = () => {
  return (
    <CardStyle>
      <CardImageStyle />
      <CardFigcaptionStyle>Right Hand Fabric</CardFigcaptionStyle>
      <CardCategoriesStyle>Desk decor</CardCategoriesStyle>
      <CardButtonStyle>Add to cart</CardButtonStyle>
    </CardStyle>
  );
};

export default Card;
