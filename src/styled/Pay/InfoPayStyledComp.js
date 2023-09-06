import { styled } from "styled-components";
import { device, size } from "../Media/MediaQueryStyledComp";

const ContainerPayStyle = styled.article`
  margin: 0 auto;
  width: 100%;
  @media ${device.mobileS} {
    width: calc(${size.mobileS} - 20px);
    padding: 30px 0;
  }

  @media ${device.mobileM} {
    width: calc(${size.mobileM} - 20px);
  }
  @media ${device.mobileL} {
    width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    width: calc(${size.tablet} / 2 - 100px);
    margin: 0 0 0 50px;
  }
  @media ${device.tabletS} {
    width: calc(${size.tabletS} / 2 - 100px);
  }

  @media ${device.laptop} {
    width: calc(${size.laptop} / 2 - 100px);
    padding: 50px 0;
  }

  @media ${device.desktop} {
    width: calc(${size.desktop} / 2.6);
    margin: 0 0 0 140px;
    padding: 80px 0;

  }
`;

const ProductPayStyle = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const ImageProductStyle = styled.img`
  min-width: 100px;
  height: 100px;
  @media ${device.mobileS} {
    min-width: 100px;
    height: 100px;  
  }

  @media ${device.laptop} {
    min-width: 55px;
    height: 55px;  
  }
`;
const ContainerTextStyle = styled.div`
  display: flex;
  width: 100%;
  @media ${device.mobileS} {
    flex-direction: column;
    max-width: 400px;
  }

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${device.desktop} {
    max-width: 600px;

  }`;

const TextProductStyle = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const ContainerBackStyle = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.veryRearColor};
  gap: 7px;
`;

const ContainerIconBackStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconBackStyle = styled.img`
  height: 14px;
  width: 14px;
`;
const LinkBackStyle = styled.p`
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.tablet} {
    font-size: 20px;

  }
`;

const ContainerTotalPayStyle = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.mobileS} {
    justify-content: space-between;
  }

  @media ${device.mobileM} {
    justify-content: end;
    gap: 10px;
  }
`;

const TextTotalPayStyle = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const ListProductsStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;
`;

export {
  ContainerPayStyle,
  ListProductsStyle,
  TextTotalPayStyle,
  ContainerTotalPayStyle,
  LinkBackStyle,
  IconBackStyle,
  ProductPayStyle,
  ImageProductStyle,
  ContainerIconBackStyle,
  ContainerBackStyle,
  TextProductStyle,
  ContainerTextStyle
};
