import React from 'react'
import {
    AchievementTextStyle,
    AchievementNumberStyle,
    AchievementStyle,
    BlockAchievementsStyle,
  } from "../../styled/Main/AchievementsStyledComp";

const Achievements = () => {
  return (
    <BlockAchievementsStyle>
    <AchievementStyle>
      <AchievementNumberStyle>500+</AchievementNumberStyle>
      <AchievementTextStyle>
        Increase in productivity
      </AchievementTextStyle>
    </AchievementStyle>
    <AchievementStyle>
      <AchievementNumberStyle>300</AchievementNumberStyle>
      <AchievementTextStyle>Product</AchievementTextStyle>
    </AchievementStyle>
    <AchievementStyle>
      <AchievementNumberStyle>5k+</AchievementNumberStyle>
      <AchievementTextStyle>Happy customers</AchievementTextStyle>
    </AchievementStyle>
    <AchievementStyle>
      <AchievementNumberStyle>100=</AchievementNumberStyle>
      <AchievementTextStyle>5 Star Review</AchievementTextStyle>
    </AchievementStyle>
  </BlockAchievementsStyle>
  )
}

export default Achievements