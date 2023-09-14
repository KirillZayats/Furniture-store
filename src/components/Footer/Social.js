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
        <ImageSocialStyle
          src={IconFacebook}
          alt="Icon Facebook"
          title="Go to Facebook"
        />
      </LinkStyle>
      <LinkStyle href="https://www.instagram.com/" target="_blank">
        <ImageSocialStyle
          src={IconInstagram}
          alt="Icon Instagram"
          title="Go to Instagram"
        />
      </LinkStyle>
      <LinkStyle href="https://www.twitter.com/" target="_blank">
        <ImageSocialStyle
          src={IconTwitter}
          alt="Icon Twitter"
          title="Go to Twitter"
        />
      </LinkStyle>
      <LinkStyle href="https://www.linkedin.com/" target="_blank">
        <ImageSocialStyle
          src={IconLinkedin}
          alt="Icon Linkedin"
          title="Go to LinedIn"
        />
      </LinkStyle>
    </ContainerImagesStyle>
  );
};

export default Social;
