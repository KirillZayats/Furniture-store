import { styled } from "styled-components";
import { device, size } from "../Media/MediaQueryStyledComp";

const BlockAchievementsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 30px;
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
    margin: 0;
    max-width: calc(${size.tablet} / 2 - 45px);
  }
  @media ${device.laptop} {
    margin: 0;
    max-width: calc(${size.laptop} / 2 - 45px);
  }
`;

const AchievementStyle = styled.div`
  display: flex;
  flex-direction: column;
    @media ${device.tablet} {
    width: calc(${size.tablet} / 4 - 45px);
  }

      @media ${device.laptop} {
    max-width: ${size.laptop};
    width: 100%;

  }
`;

const AchievementNumberStyle = styled.span`
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  @media ${device.mobileS} {
    font-size: 24px;
  }
  @media ${device.laptop} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 48px;
  }
`;
const DataCountStyle = styled.span``;
const AchievementTextStyle = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export {
    AchievementTextStyle,
    AchievementNumberStyle,
    AchievementStyle, 
    BlockAchievementsStyle,
    DataCountStyle
  };