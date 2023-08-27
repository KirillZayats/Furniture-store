import { styled } from "styled-components";
import ImageLamp from "../../resource/images/lamp.png";

const SaleStyle = styled.div`
padding-top: 30px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  background-image: url(${ImageLamp});
  background-position: -90% 250%;
  background-size: 130%;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.secondColor};
`;

const ArroyChangeColor = styled.div`
  height: 24px;
  & img {
    filter: invert(1);
  }
`;

const ContainerIndentStyle = styled.div`
  margin-top: 20px;
  padding-bottom: 50px;
`;

const ButtonModStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonTextStyle = styled.p`
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
