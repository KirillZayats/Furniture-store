import { styled } from "styled-components";
import { device, size } from "../Media/MediaQueryStyledComp";
import ImageMain from "../../resource/images/main.jpg";
import IconArrow from "../../resource/images/icons/Icon";
import { Link } from "react-router-dom";
const MainStyle = styled.main`
  margin: 0 auto;

  @media ${device.mobileS} {
    max-width: ${size.mobileS};
  }

  @media ${device.mobileM} {
    max-width: ${size.mobileM};
  }
  @media ${device.mobileL} {
    max-width: ${size.mobileL};
  }

  @media ${device.tablet} {
    max-width: ${size.tablet};
  }
  @media ${device.tabletS} {
    max-width: ${size.tabletS};
  }

  @media ${device.laptop} {
    max-width: ${size.laptop};
  }

  @media ${device.desktop} {
    max-width: ${size.desktop};
  }
`;

const ImageMainBlockStyle = styled.div`
  height: 300px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
    margin-top: 30px;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
  }
  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 100px);
    height: 400px;
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 100px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 100px);
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    margin-top: 40px;
    height: 600px;
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 140px);
    margin-top: 60px;
  }
`;

const ImageMainContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-image: url(${ImageMain});
  background-repeat: no-repeat;

  @media ${device.mobileS} {
    background-position: 10% 0%;
    background-size: 180%;
  }

  @media ${device.mobileM} {
    background-size: 150%;
  }

  @media ${device.mobileL} {
    background-position: 10% 0%;
    background-size: 145%;
  }

  @media ${device.tablet} {
    background-position: 20% 60%;
    background-size: 110%;
  }
  @media ${device.tabletS} {
    background-position: 20% 70%;
  }

  @media ${device.laptop} {
    background-position: 25% 80%;
    background-size: 120%;
  }

  @media ${device.desktop} {
    background-position: 20% 80%;
  }
`;

const BlockButtonsStyle = styled.div`
  display: flex;
  gap: 20px;
`;

const BlackButtonInfoStyle = styled.button`
  width: 120px;
  height: 40px;
  background: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.secondColor};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
`;
const WhiteButtonInfoStyle = styled.button`
  width: 120px;
  height: 40px;
  background: ${({ theme }) => theme.colors.secondColor};
  color: ${({ theme }) => theme.colors.mainColor};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 5px;
`;

const ArticleContainerStyle = styled.article`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
  }
  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 100px);
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 100px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 100px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 140px);
  }
`;

const ContainerInfoDescriptionStyle = styled.div`
  margin: 0 auto;

  @media ${device.laptop} {
    grid-column-start: 2;
    grid-row-start: 1;
  }
`;

const ContainerFlexDescriptionsStyle = styled.div`
  display: grid;
  @media ${device.mobileS} {
    grid-template-rows: auto auto auto;
  }

  @media ${device.laptop} {
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
  }
`;

const TitleMainBlockStyle = styled.h1`
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

  @media ${device.mobileS} {
    font-size: 36px;
  }
  @media ${device.laptop} {
    font-size: 46px;

    grid-column-start: 1;
    grid-row-start: 1;
  }

  @media ${device.desktop} {
    font-size: 56px;
  }
`;

const BoldTextStyle = styled.strong``;

const PreTitleStyle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 15px;
`;

const TitleBlockStyle = styled.h2`
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  @media ${device.mobileS} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 48px;
  }
`;

const TextCenterStyle = styled.div`
  text-align: center;
`;

const TextStyle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media ${device.mobileS} {
    margin: 20px 0;
  }
  @media ${device.laptop} {
    margin: 10px 0 25px;
  }
  @media ${device.desktop} {
    margin: 20px 0 40px;
  }
`;

const ContainerImageStyle = styled.div``;

const ContainerLinkStyle = styled.div`
  display: flex;
  gap: 8px;
`;

const Svg = styled(IconArrow)`
  width: 24px;
  height: 24px;
`;
const IconArroyRightStyle = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <g id="Icon / Chevron Right">
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
        fill="black"
      />
    </g>
  </Svg>
);

const ContainerListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &a:hover {
    animation: scale 0.5s ease-in;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.05);
    }

    100% {
      transform: scale(1);
    }
  }
`;

const LinkPage = styled(Link)`
  color: ${({ theme }) => theme.colors.mainColor};
`;

const TextErrorStyle = styled.h3`
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: red;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 26px;
  }
  @media ${device.desktop} {
    font-size: 40px;
  }
`;

const ContainerErrorStyle = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export {
  MainStyle,
  IconArroyRightStyle,
  TextCenterStyle,
  ContainerImageStyle,
  TextStyle,
  TitleBlockStyle,
  PreTitleStyle,
  BoldTextStyle,
  TitleMainBlockStyle,
  ArticleContainerStyle,
  WhiteButtonInfoStyle,
  BlackButtonInfoStyle,
  BlockButtonsStyle,
  ImageMainBlockStyle,
  ImageMainContainerStyle,
  ContainerLinkStyle,
  ContainerListStyle,
  ContainerInfoDescriptionStyle,
  ContainerFlexDescriptionsStyle,
  LinkPage,
  TextErrorStyle,
  ContainerErrorStyle
};
