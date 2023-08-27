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
      <LinkStyle>
        <ImageSocialStyle src={IconFacebook} />
      </LinkStyle>
      <LinkStyle>
        <ImageSocialStyle src={IconInstagram} />
      </LinkStyle>
      <LinkStyle>
        <ImageSocialStyle src={IconTwitter} />
      </LinkStyle>
      <LinkStyle>
        <ImageSocialStyle src={IconLinkedin} />
      </LinkStyle>
    </ContainerImagesStyle>
  );
};

export default Social;
