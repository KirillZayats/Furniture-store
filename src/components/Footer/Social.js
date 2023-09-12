import React from "react";
import {
  ContainerImagesStyle,
  ImageSocialStyle,
} from "../../styled/Footer/SocialStyledComp";
import IconFacebook from "../../resource/images/icons/social/Facebook.svg";
import IconInstagram from "../../resource/images/icons/social/Instagram.svg";
import IconTwitter from "../../resource/images/icons/social/Twitter.svg";
import IconLinkedin from "../../resource/images/icons/social/LinkedIn.svg";
import { LinkStyle } from "../../styled/AppStyledComp";

const Social = () => {
  return (
    <ContainerImagesStyle>
      <LinkStyle href="https://www.facebook.com/" target="_black">
        <ImageSocialStyle src={IconFacebook} />
      </LinkStyle>
      <LinkStyle href="https://www.instagram.com/" target="_black">
        <ImageSocialStyle src={IconInstagram} />
      </LinkStyle>
      <LinkStyle href="https://www.twitter.com/" target="_black">
        <ImageSocialStyle src={IconTwitter} />
      </LinkStyle>
      <LinkStyle href="https://www.linkedin.com/" target="_black">
        <ImageSocialStyle src={IconLinkedin} />
      </LinkStyle>
    </ContainerImagesStyle>
  );
};

export default Social;
