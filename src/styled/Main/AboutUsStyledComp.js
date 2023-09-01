import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";

const BlockContentStyle = styled.section`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
    margin: 0px auto;
    padding: 30px 0;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 50px;
  }
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 70px;
    padding: 55px 0;
  }
`;

const ContainerAboutUsStyle = styled.article`
  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
    margin: 0 auto;
    padding-bottom: 10px;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
    padding-bottom: 30px;
  }
  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    margin: 0;
    max-width: calc(${size.tablet} / 2 - 65px);
    padding: 30px 0;
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} / 2 - 70px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} / 2 - 80px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} / 2 - 105px);
    padding: 70px 0;
  }
`;

const TextAboutStyle = styled.div`
  @media ${device.mobileS} {
    text-align: center;
  }
  @media ${device.tablet} {
    text-align: left;
  }
`;

const ContainerAboutImageStyle = styled.div`
  @media ${device.mobileS} {
    max-width: ${size.mobileM};
  }

  @media ${device.mobileM} {
    max-width: ${size.mobileM};
  }
  @media ${device.mobileL} {
    max-width: ${size.mobileL};
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} / 2 - 65px);
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} / 2 - 70px);
  }
  @media ${device.laptop} {
    max-width: calc(${size.laptop} / 2 - 80px);
    height: 493px;
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} / 2 - 105px);
    height: 620px;
  }
`;

const ImageAboutStyle = styled.img`
  width: 100%;
  object-fit: cover;
  @media ${device.mobileS} {
    height: calc(${size.mobileS} + 10px);
  }

  @media ${device.mobileM} {
    height: calc(${size.mobileM} - 10px);
  }
  @media ${device.mobileL} {
    height: calc(${size.mobileL} - 30px);
  }

  @media ${device.tablet} {
    width: calc(${size.tablet} / 2 - 65px);
    height: 535px;
  }
  @media ${device.tabletS} {
    width: calc(${size.tabletS} / 2 - 70px);
    height: 535px;
  }

  @media ${device.laptop} {
    width: calc(${size.laptop} / 2 - 80px);
    height: 493px;
  }

  @media ${device.desktop} {
    width: calc(${size.desktop} / 2 - 105px);
    height: 620px;
  }
`;
export {
  ContainerAboutUsStyle,
  TextAboutStyle,
  ContainerAboutImageStyle,
  ImageAboutStyle,
  BlockContentStyle,
};
