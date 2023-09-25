import React, { useEffect, useState } from "react";
import {
  AchievementTextStyle,
  AchievementNumberStyle,
  AchievementStyle,
  BlockAchievementsStyle,
  DataCountStyle,
} from "../../styled/Main/AchievementsStyledComp";
import gsap from "gsap";

const Achievements = () => {
  const [isCheckGsap, setIsCheckGsap] = useState(false)
  useEffect(() => {
    window.location.pathname.includes("about") ? createAnimationCount() : document.addEventListener("scroll", checkViewBlock);
  })

  useEffect(() => {
    isCheckGsap && createAnimationCount();
  }, [isCheckGsap])

  const createAnimationCount = () => {
    const items = ["#count-productivity", "#count-products", "#count-customers", "#count-best-review"]
    const intervals = [10, 3, 0.1, 1]
    items.forEach((element, index) => {
      gsap.from(element, { innerText: 0, duration: 3, 
        snap: {
          innerText:intervals[index]
        } 
        });
  
    });
  };

  const checkViewBlock = () => {
    if(!isCheckGsap) {
      let element = document.getElementById('block-about');
      if(element != null) {
        let rect = element.getBoundingClientRect();
        if(window.innerWidth < 1440) {
          if((rect.top - window.innerHeight / 3) < 0) {
            setIsCheckGsap(true)
          }
        } else {
          if((rect.top - window.innerHeight / 3 - 200) < 0) {
            setIsCheckGsap(true)
          }
        }
      }
    }
  }

  return (
    <BlockAchievementsStyle>
      <AchievementStyle className="block-achievements">
        <AchievementNumberStyle>
          <DataCountStyle id="count-productivity">500</DataCountStyle>+
        </AchievementNumberStyle>
        <AchievementTextStyle>Increase in productivity</AchievementTextStyle>
      </AchievementStyle>
      <AchievementStyle className="block-achievements">
        <AchievementNumberStyle>
          <DataCountStyle id="count-products">300</DataCountStyle>+
        </AchievementNumberStyle>
        <AchievementTextStyle>Product</AchievementTextStyle>
      </AchievementStyle>
      <AchievementStyle className="block-achievements">
        <AchievementNumberStyle>
          <DataCountStyle id="count-customers">5</DataCountStyle>
          k+
        </AchievementNumberStyle>
        <AchievementTextStyle>Happy customers</AchievementTextStyle>
      </AchievementStyle>
      <AchievementStyle className="block-achievements">
        <AchievementNumberStyle>
          <DataCountStyle id="count-best-review">100</DataCountStyle>=
        </AchievementNumberStyle>
        <AchievementTextStyle>5 Star Review</AchievementTextStyle>
      </AchievementStyle>
    </BlockAchievementsStyle>
  );
};

export default Achievements;
