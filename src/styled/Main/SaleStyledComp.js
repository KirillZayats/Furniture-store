import { styled } from "styled-components";
import ImageLamp from "../../resource/images/lamp.png";
import { device, size } from "../Media/MediaQueryStyledComp";

const SaleStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.mainColor};
  background-image: url(${ImageLamp});

  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.secondColor};

  @media ${device.mobileS} {
    background-position: -140% 197%;
    background-size: 120%;
    padding: 30px 0;
  }

  @media ${device.mobileM} {
    background-position: -220% 70%;
    background-size: 120%;
  }

  @media ${device.tablet} {
    background-position: 235% 70%;
    background-size: 75%;
    padding: 40px 0;
  }
  @media ${device.tabletS} {
    background-position: 165% 70%;
    background-size: 60%;

  }

  @media ${device.laptop} {
    background-position: 110% 255%;    
    background-size: 40%;
    padding: 60px 0;
  }

  @media ${device.desktop} {
    background-position: 105% 255%;    
    padding: 100px 0;
  }
`;

const ArroyChangeColor = styled.div`
  height: 24px;
  & img {
    filter: invert(1);
  }
`;

const ContainerIndentStyle = styled.div`
  margin-top: 20px;
`;

const ButtonModStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonTextStyle = styled.a`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export {
  ButtonTextStyle,
  ButtonModStyle,
  ContainerIndentStyle,
  ArroyChangeColor,
  SaleStyle,
};
