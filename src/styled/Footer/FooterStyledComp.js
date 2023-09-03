import { styled } from "styled-components";
import { device, size } from "../Media/MediaQueryStyledComp";

const FooterContentStyle = styled.footer`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: ${size.mobileS};
    padding: 30px 0;
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
    padding: 50px 0;

  }

  @media ${device.desktop} {
    max-width: ${size.desktop};
    padding: 80px 0;

  }

`;

const TitleBlockStyle = styled.h4`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 16px;
  @media ${device.mobileS} {
    margin-top: 25px;
  }

  @media ${device.tablet} {
    margin-top: 0px;
  }
`;
const ListElementStyle = styled.li`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const ContainerMainInfoFooter = styled.div`
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;

  }

  @media ${device.tabletS} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  @media ${device.laptop} {
    margin-bottom: 50px;
  }

  @media ${device.desktop} {
    margin-bottom: 80px;
  }
  `;

const BlocksStyle = styled.div`
      display: flex;

  @media ${device.mobileS} {
    flex-direction: column;

  }

  @media ${device.tablet} {
    flex-direction: row;
    gap: 100px;
  }

    @media ${device.tablet} {
    gap: 50px;
  }

  @media ${device.tabletS} {
    gap: 40px;
  }

      @media ${device.desktop} {
    gap: 100px;
  }
`; 

const BlockStyle = styled.div`
    display: flex;
  flex-direction: column;
`;

const LinkStyle = styled.a``;

const ContainerLinksStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.mobileS} {
    margin-top: 20px;
    margin-bottom: 20px;

  }

  @media ${device.tablet} {
    margin-top: 0px;
    margin-bottom: 0px;
    width: calc(${size.tablet} / 2.5);
  }

  @media ${device.tabletS} {
    width: calc(${size.tablet} / 2);
  }
`;

const TextReservedStyle = styled.p`
  @media ${device.mobileS} {
    font-size: 12px;
  }

  @media ${device.mobileM} {
    font-size: 14px;
  }

  @media ${device.tablet} {
    font-size: 12px;
  }

  @media ${device.tabletS} {
    font-size: 14px;
  }

  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const ContainerReserverSocialStyle = styled.div`
width: 100%;
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;

  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;

  }
`;
export {
  FooterContentStyle,
  TitleBlockStyle,
  ListElementStyle,
  LinkStyle,
  ContainerLinksStyle,
  TextReservedStyle,
  ContainerReserverSocialStyle,
  ContainerMainInfoFooter,
  BlockStyle,
  BlocksStyle
};
