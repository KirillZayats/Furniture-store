import { styled } from "styled-components";
import { device, size } from "../../../styled/Media/MediaQueryStyledComp";

const ArticleContainerChoseUsStyle = styled.article`
  margin: 0 auto;
  display: flex;

  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
    flex-direction: column;
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
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContainerListElemChoseStyle = styled.li``;

const NumberListChoseStyle = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const ContainerChoseStyle = styled.div`
  @media ${device.mobileS} {
    margin: 0px auto 30px;
  }

  @media ${device.desktop} {
    margin: 0px 0px 30px;

  }
`;

const TitleChoseContainerStyle = styled.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const ContainerListChoseStyle = styled.ul`
  display: flex;


  @media ${device.mobileS} {
    flex-direction: column;
  gap: 30px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} / 1.67);
  }
`;

const TestChoseStyle = styled.p`
    font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media ${device.mobileS} {
    margin: 20px 0;
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet});
  }

  @media ${device.tabletS} {
    max-width: calc(${size.tabletS});
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop});
    margin: 10px 0 20px;
  }
  @media ${device.desktop} {
    max-width: calc(${size.desktop} / 4);
    margin: 20px 0 20px;
  }
`;

const TextChoseListStyle = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media ${device.mobileS} {
    margin: 20px 0;
    font-size: 18px;
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} / 2 - 70px);
  }
  @media ${device.laptop} {
    max-width: calc(${size.laptop} / 2 - 80px);

    margin: 10px 0 20px;
  }
  @media ${device.desktop} {
    max-width: calc(${size.desktop} / 3.48);
    font-size: 16px;

    margin: 20px 0 20px;
  }
`;

export {
  NumberListChoseStyle,
  ContainerListElemChoseStyle,
  TitleChoseContainerStyle,
  ContainerChoseStyle,
  ContainerListChoseStyle,
  ArticleContainerChoseUsStyle,
  TextChoseListStyle,
  TestChoseStyle
};
