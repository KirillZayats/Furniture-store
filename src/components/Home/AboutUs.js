import React from "react";
import {
  TextStyle,
  TitleBlockStyle,
  PreTitleStyle,
} from "../../styled/Main/MainStyledComp";
import Achievements from "./Achievements";
import ImageLamps from "../../resource/images/lamps.jpg";
import {
  ContainerAboutUsStyle,
  TextAboutStyle,
  ContainerAboutImageStyle,
  ImageAboutStyle,
  BlockContentStyle
} from "../../styled/Main/AboutUsStyledComp";
import { nameSite } from "../../Constants";

const AboutUs = () => {

  return (
    <BlockContentStyle className={window.location.pathname == `/${nameSite}/` ? "element-animation" : ""}>
      <ContainerAboutUsStyle>
        <TextAboutStyle>
          <PreTitleStyle>About Us</PreTitleStyle>
          <TitleBlockStyle>About the shop</TitleBlockStyle>
          <TextStyle>
            Whether you're moving into a new home, redecorating your current
            space, or just looking for a few accents to spruce up your style,
            we've got you covered. Shop our products online, and enjoy fast and
            free shipping, easy returns, and friendly customer service.
          </TextStyle>
          <Achievements/>
        </TextAboutStyle>
      </ContainerAboutUsStyle>
      <ContainerAboutImageStyle>
        <ImageAboutStyle src={ImageLamps} />
      </ContainerAboutImageStyle>
    </BlockContentStyle>
  );
};

export default AboutUs;
