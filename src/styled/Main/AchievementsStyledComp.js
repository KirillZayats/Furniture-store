import { styled } from "styled-components";

const BlockAchievementsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 30px;
  width: 300px;
`;

const AchievementStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const AchievementNumberStyle = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
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
    BlockAchievementsStyle
  };