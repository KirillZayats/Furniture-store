import { styled } from "styled-components";
import { device, size } from "../Media/MediaQueryStyledComp";
import IconArrow from "../../resource/images/icons/Icon"
import { Link } from "react-router-dom";
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
  cursor: pointer;
`;

const ContainerIconBackStyle = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.mobileS} {
    margin-top: 3px;
  }

  @media ${device.tablet} {
    margin-top: 4px;

  }
`;

const IconBackStyle = styled.img`
  height: 14px;
  width: 14px;
`;

const LinkBackStyle = styled(Link)`
`;

const LinkParagrafStyle = styled.p`
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

const Svg = styled(IconArrow)` 

  @media ${device.mobileS} {
    width: 14px; 
  height: 14px;  }

  @media ${device.tablet} {
    width: 20px; 
  height: 20px;
  }
`
const IconArrowLeft = ({ className }) => (
  <Svg viewBox="0 0 14 14" className={className}>
    <g id="Icons/" clipPath="url(#clip0_3_1878)">
      <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M3.08189 6.59798H13.529C13.7682 6.59798 13.9976 6.693 14.1667 6.86215C14.3359 7.03129 14.4309 7.2607 14.4309 7.49991C14.4309 7.73912 14.3359 7.96853 14.1667 8.13767C13.9976 8.30682 13.7682 8.40184 13.529 8.40184H3.08189L7.22267 12.5426C7.39203 12.7119 7.48722 12.9414 7.4873 13.1809C7.48739 13.4203 7.39236 13.6499 7.22312 13.8193C7.05388 13.9887 6.8243 14.0839 6.58487 14.0839C6.34545 14.084 6.11579 13.989 5.94643 13.8198L0.264257 8.13758C0.0951705 7.96844 0.000183105 7.73907 0.000183105 7.49991C0.000183105 7.26075 0.0951705 7.03138 0.264257 6.86225L5.94643 1.18007C6.11591 1.01083 6.34568 0.915847 6.58519 0.916016C6.8247 0.916185 7.05433 1.01149 7.22357 1.18097C7.39281 1.35045 7.48779 1.58022 7.48762 1.81973C7.48745 2.05924 7.39215 2.28887 7.22267 2.45811L3.08189 6.59798Z" fill="#8792A2" />
    </g>
    <defs>
      <clipPath id="clip0_3_1878">
        <rect width="14.4309" height="14.4309" fill="white" transform="translate(0 0.284668)" />
      </clipPath>
    </defs>
  </Svg>
)

const ContainerBlocksStyle = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
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
  ContainerTextStyle,
  IconArrowLeft,
  LinkParagrafStyle,
  ContainerBlocksStyle
};
