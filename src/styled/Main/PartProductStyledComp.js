import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";

const ContainterCardsStyle = styled.div`
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
    gap: 30px;
  }
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0px;
    row-gap: 30px;
  }

  @media ${device.tabletS} {
    row-gap: 40px;
  }
    @media ${device.laptop} {
      row-gap: 20px;
  }
`;

const ProductsStyle = styled.div`
  padding-top: 0.1px;
`;

const ContainerButtonStyle = styled.div`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const ButtonViewAllStyle = styled.button`
  height: 45px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.secondColor};

  @media ${device.mobileS} {
    width: 105px;
  }
`;

const ContainerButtonViewAllUpStyle = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: block;
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    justify-content: end;
    align-items: end;
  }
`;
const ContainerButtonViewAllDownStyle = styled.div`
  height: 45px;


  @media ${device.mobileS} {
    display: flex;
  justify-content: center;
  align-items: center;    margin-top: 30px;

  }
  @media ${device.tablet} {
    display: none;
    margin-top: 0px;

  }
`;

const ContainerTitleBlockStyle = styled.div`
    @media ${device.tablet} {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    margin-bottom: 20px;
  }

  @media ${device.laptop} {
    margin-bottom: 40px;
  }

  @media ${device.desktop} {
    margin-bottom: 60px;
  }
`;

const TitleBlockStyle = styled.h2`
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  @media ${device.mobileS} {
    font-size: 32px;

  }
  @media ${device.tablet} {
    grid-column-start: 1;
    grid-row-start: 1;
  }
  @media ${device.desktop} {
    font-size: 48px;
  }
`;

const TextStyle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media ${device.mobileS} {
    margin: 20px 0;
  }

  @media ${device.tablet} {
    grid-column-start: 1;
    grid-row-start: 2;
    margin: 20px 0 0;
  }

  @media ${device.laptop} {
    margin: 10px 0 0;
  }
  @media ${device.desktop} {
    margin: 20px 0 0;
  }
`;

export {
  ContainterCardsStyle,
  ProductsStyle,
  ButtonViewAllStyle,
  ContainerButtonStyle,
  ContainerButtonViewAllDownStyle,
  ContainerButtonViewAllUpStyle,
  ContainerTitleBlockStyle,
  TitleBlockStyle,
  TextStyle
};
