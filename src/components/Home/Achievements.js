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
    <AchievementStyle className='block-achievements'>
      <AchievementNumberStyle>500+</AchievementNumberStyle>
      <AchievementTextStyle>
        Increase in productivity
      </AchievementTextStyle>
    </AchievementStyle>
    <AchievementStyle className='block-achievements'>
      <AchievementNumberStyle>300+</AchievementNumberStyle>
      <AchievementTextStyle>Product</AchievementTextStyle>
    </AchievementStyle>
    <AchievementStyle className='block-achievements'>
      <AchievementNumberStyle>5k+</AchievementNumberStyle>
      <AchievementTextStyle>Happy customers</AchievementTextStyle>
    </AchievementStyle>
    <AchievementStyle className='block-achievements'>
      <AchievementNumberStyle>100=</AchievementNumberStyle>
      <AchievementTextStyle>5 Star Review</AchievementTextStyle>
    </AchievementStyle>
  </BlockAchievementsStyle>
  )
}

export default Achievements