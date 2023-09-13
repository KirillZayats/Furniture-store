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
    <ContainerImagesStyle className="container-social__image">
      <LinkStyle href="https://www.facebook.com/" target="_blank">
        <ImageSocialStyle src={IconFacebook} />
      </LinkStyle>
      <LinkStyle href="https://www.instagram.com/" target="_blank">
        <ImageSocialStyle src={IconInstagram} />
      </LinkStyle>
      <LinkStyle href="https://www.twitter.com/" target="_blank">
        <ImageSocialStyle src={IconTwitter} />
      </LinkStyle>
      <LinkStyle href="https://www.linkedin.com/" target="_blank">
        <ImageSocialStyle src={IconLinkedin} />
      </LinkStyle>
    </ContainerImagesStyle>
  );
};

export default Social;
