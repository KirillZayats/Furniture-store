import { styled } from "styled-components";
import { device, size } from "../Media/MediaQueryStyledComp";
import { Link } from "react-router-dom";

const CardStyle = styled.div``;
const CardImageStyle = styled.img`
  object-fit: cover;

  @media ${device.mobileS} {
    width: 100%;
    height: 300px;
  }

  @media ${device.tablet} {
    width: calc(${size.tablet} / 2 - 70px);
  }

  @media ${device.tabletS} {
    width: calc(${size.tabletS} / 2 - 80px);
  }

  @media ${device.laptop} {
    width: calc(${size.laptop} / 4 - 40px);
    height: 200px;
  }

  @media ${device.desktop} {
    width: calc(${size.desktop} / 4 - 60px);
    height: 300px;
  }
`;
const CardFigcaptionStyle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 10px;
`;

const ContainerFigcaptionStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardCategoriesStyle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 10px;
`;
const CardButtonCartStyle = styled.button`
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.buttonPayColor};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.buttonPayColor};
  color: ${({ theme }) => theme.colors.secondColor};
  height: 35px;
  width: 49%;

  &:hover {
    background: ${({ theme }) => theme.colors.mainColor};
  }
`;

const CardButtonDetailsStyle = styled.button`
  text-align: center;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.veryRearColor};
  background: ${({ theme }) => theme.colors.veryRearColor};
  color: ${({ theme }) => theme.colors.secondColor};
  height: 35px;
  width: 100%;
`;

const ContainerButtonStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkButtonStyle = styled(Link)`
  width: 49%;
`;

export {
  CardButtonCartStyle,
  CardButtonDetailsStyle,
  CardCategoriesStyle,
  CardFigcaptionStyle,
  CardImageStyle,
  CardStyle,
  ContainerFigcaptionStyle,
  ContainerButtonStyle,
  LinkButtonStyle
};
