import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";

const ContainerArrowsStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const ContainerArrowStyle = styled.div`
  height: 24px;
  width: 40px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.buttonPayColor};
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const ArrowStyle = styled.img`
  height: 24px;
  width: 24px;
`;
const CountProductsStyle = styled.span`
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.mobileM} {
    font-size: 18px;
  }
`;

const TextProductStyle = styled.h3`
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }

  @media ${device.tablet} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const PriceProductStyle = styled.span`
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }

  @media ${device.tablet} {
    text-align: right;
    grid-column-start: 2;
    grid-row-start: 2;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const ContainerTextStyle = styled.div`
  display: flex;
  width: 100%;
  @media ${device.mobileS} {
    flex-direction: column;
    max-width: 150px;
  }

  @media ${device.mobileM} {
    max-width: 200px;
  }

  @media ${device.mobileL} {
    max-width: 220px;
  }

  @media ${device.tablet} {
    max-width: 260px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
  }

  @media ${device.tablet} {
    max-width: 260px;
  }

  @media ${device.laptop} {
    max-width: 410px;
  }
  @media ${device.desktop} {
    max-width: 700px;
  }
  p:last-child {
    text-align: right;
  }
`;

const ProductPayStyle = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CheckboxStyle = styled.input`
  margin-left: auto;
  accent-color: ${({ theme }) => theme.colors.buttonPayColor};
`;

const ImageProductStyle = styled.img`
  min-width: 100px;
  height: 100px;
  @media ${device.mobileS} {
    min-width: 100px;
    height: 100px;
  }
`;

export {
  ImageProductStyle,
  CheckboxStyle,
  ProductPayStyle,
  ContainerTextStyle,
  PriceProductStyle,
  TextProductStyle,
  CountProductsStyle,
  ArrowStyle,
  ContainerArrowStyle,
  ContainerArrowsStyle,
};
