import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";

const CardStyle = styled.div``;
const CardImageStyle = styled.img`
  object-fit: cover;

  @media ${device.mobileS} {
    width: 100%;
    height: 300px;
  }

  @media ${device.tablet} {
    width: calc(${size.tablet} / 2 - 70px);
  }

  @media ${device.tabletS} {
    width: calc(${size.tabletS} / 2 - 80px);
  }

  @media ${device.laptop} {
    width: calc(${size.laptop} / 4 - 40px);
    height: 200px;
  }

  @media ${device.desktop} {
    width: calc(${size.desktop} / 4 - 60px);
    height: 300px;
  }
`;
const CardFigcaptionStyle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 10px;
`;

const ContainerFigcaptionStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardCategoriesStyle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 10px;
`;
const CardButtonStyle = styled.button`
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.secondColor};
  height: 35px;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: calc(${size.tablet} / 2 - 70px);
  }

  @media ${device.tabletS} {
    width: calc(${size.tabletS} / 2 - 80px);
  }
  @media ${device.laptop} {
    width: calc(${size.laptop} / 4 - 40px);
  }
  @media ${device.desktop} {
    width: calc(${size.desktop} / 4 - 60px);
  }
`;

export {
  CardButtonStyle,
  CardCategoriesStyle,
  CardFigcaptionStyle,
  CardImageStyle,
  CardStyle,
  ContainerFigcaptionStyle
};
