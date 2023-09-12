import { styled } from "styled-components";
import { device, size } from "../Media/MediaQueryStyledComp";

const ContainerImagesStyle = styled.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media ${device.tablet} {
    margin-top: 10px;
  }
`;

const ImageSocialStyle = styled.img`
  @media ${device.mobileS} {
    filter: brightness(0) invert(1);
  }
  @media ${device.laptop} {
    filter: none;
  }
`;

export { ContainerImagesStyle, ImageSocialStyle };
