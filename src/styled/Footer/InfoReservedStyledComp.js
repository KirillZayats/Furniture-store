import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";

const InfoReservedStyle = styled.div`
  display: flex;
  margin: 15px 0px 0px;

    @media ${device.mobileS} {
    flex-direction: column;

  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    width: calc(${size.tablet} / 1.5);
  }

  @media ${device.tabletS} {
    width: calc(${size.tabletS} / 1.3);
  }
`;

export {
  InfoReservedStyle
};
