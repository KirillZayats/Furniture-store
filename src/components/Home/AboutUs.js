import React from 'react'
import { BlockContentStyle } from "../../styled/AppStyledComp";
import {
    TextCenterStyle,
    ContainerImageStyle,
    TextStyle,
    TitleBlockStyle,
    PreTitleStyle,
    ArticleContainerStyle,
    ImageAboutStyle,
  } from "../../styled/Main/MainStyledComp";
import Achievements from './Achievements';

const AboutUs = () => {
  return (
    <BlockContentStyle>
    <ArticleContainerStyle>
      <TextCenterStyle>
        <PreTitleStyle>About Us</PreTitleStyle>
        <TitleBlockStyle>About the shop</TitleBlockStyle>
          <TextStyle>
            Whether you're moving into a new home, redecorating your current
            space, or just looking for a few accents to spruce up your
            style, we've got you covered. Shop our products online, and
            enjoy fast and free shipping, easy returns, and friendly
            customer service.
          </TextStyle>
        <Achievements/>
      </TextCenterStyle>
    </ArticleContainerStyle>
    <ContainerImageStyle>
      <ImageAboutStyle />
    </ContainerImageStyle>
  </BlockContentStyle>
  )
}

export default AboutUs