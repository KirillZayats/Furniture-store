import { styled } from "styled-components";

const CardStyle = styled.div``;
const CardImageStyle = styled.img`
  width: 100%;
  height: 300px;
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
  border: 1px solid ${({theme}) => theme.colors.mainColor};
  border-radius: 5px;
  background: ${({theme}) => theme.colors.secondColor};
`;

export {CardButtonStyle, CardCategoriesStyle, CardFigcaptionStyle, CardImageStyle, CardStyle};