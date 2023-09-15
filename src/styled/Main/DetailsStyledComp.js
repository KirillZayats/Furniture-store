import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";
import {Scale} from "../../styled/AppStyledComp";
import { Link } from "react-router-dom";

const ContainerDetailsStyle = styled.article`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
  }
  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 100px);
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 100px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 100px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 140px);
    padding: 55px 0;
  }

  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
`;

const ContainerProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 45px auto auto;
    column-gap: 30px;
    row-gap: 0;
  }
  @media ${device.laptop} {
    grid-template-columns: 400px 1fr;
    column-gap: 50px;
  }
  @media ${device.desktop} {
    grid-template-columns: 500px 1fr;
    grid-template-rows: auto auto 55px auto auto;
  }
`;

const ImageProductStyle = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  @media ${device.mobileS} {
    width: 100%;
    height: 300px;
  }
  @media ${device.tablet} {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 5;
  }
  @media ${device.desktop} {
    height: 350px;
  }
`;

const TitleProductStyle = styled.h3`
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  @media ${device.mobileS} {
    font-size: 24px;
  }
  @media ${device.tablet} {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media ${device.laptop} {
    font-size: 22px;
  }
  @media ${device.desktop} {
    font-size: 30px;
  }
`;

const DescriptionStyle = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  @media ${device.mobileS} {
    font-size: 18px;
  }

  @media ${device.tablet} {
    grid-column-start: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
`;

const ContainerRatingStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media ${device.tablet} {
    grid-column-start: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    margin: 10px 0;
  }
  @media ${device.desktop} {
    margin: 10px 0 20px;
  }

  span:first-child {
    font-size: 25px;
  }
`;
const ValueRatingStyle = styled.span``;

const ContainerPayStyle = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    gap: 10px;
  }
  @media ${device.tablet} {
    grid-column-start: 2;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  @media ${device.desktop} {
    gap: 20px;
  }
`;
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
  transition: all .2s ease-in;

&:hover {
  background: ${({ theme }) => theme.colors.mainColor};

}
&:active {
  animation: ${Scale} 0.1s ease-in;
}
`;
const ArrowStyle = styled.img`
  height: 24px;
  width: 24px;
`;
const CountProductsStyle = styled.span``;
const PriceStyle = styled.span``;
const ContainerSettingForPayStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${device.mobileS} {
    justify-content: space-between;
  }
  @media ${device.desktop} {
    justify-content: start;

    gap: 30px;
  }
`;
const ButtonAddCartStyle = styled.button`
  height: 40px;
  color: ${({ theme }) => theme.colors.secondColor};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
  font-size: 16px;

  @media ${device.mobileS} {
    width: calc(50% - 5px);
  }
  @media ${device.desktop} {
    width: 200px;
  }
`;

const ButtonPayStyle = styled.button`
  height: 40px;
  color: ${({ theme }) => theme.colors.secondColor};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const ContainerButtonsStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media ${device.mobileS} {
    gap: 10px;
  }
  @media ${device.desktop} {
    gap: 30px;
  }

  button:first-child {
    background: ${({ theme }) => theme.colors.rearColor};
  }
  button:last-child {
    background: ${({ theme }) => theme.colors.buttonPayColor};
  }

  &>button:first-child:hover {
    background: ${({ theme }) => theme.colors.lineTransitionPayColor};
    color: ${({ theme }) => theme.colors.mainColor};
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
  }
  button:last-child:hover {
    background: ${({ theme }) => theme.colors.mainColor};
  }
`;

const LinkPayStyle = styled(Link)`
  /* display: block; */
  @media ${device.mobileS} {
    width: calc(50% - 5px);
  }
  @media ${device.desktop} {
    width: 200px;
  }`;

export {
  ContainerButtonsStyle,
  ButtonPayStyle,
  ContainerPayStyle,
  ContainerSettingForPayStyle,
  PriceStyle,
  CountProductsStyle,
  ArrowStyle,
  ContainerArrowStyle,
  ContainerArrowsStyle,
  ValueRatingStyle,
  ContainerRatingStyle,
  ContainerDetailsStyle,
  DescriptionStyle,
  TitleProductStyle,
  ImageProductStyle,
  ContainerProductStyle,
  LinkPayStyle,
  ButtonAddCartStyle
};
