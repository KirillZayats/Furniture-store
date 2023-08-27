import React from 'react'
import {ContainerImagesStyle, ImageSocialStyle} from "../../styled/Footer/SocialStyledComp";
import IconFacebook from "../../resource/images/icons/social/Facebook.svg";
import IconInstagram from "../../resource/images/icons/social/Instagram.svg";
import IconTwitter from "../../resource/images/icons/social/Twitter.svg";
import IconLinkedin from "../../resource/images/icons/social/LinkedIn.svg";

const Social = () => {
  return (
    <ContainerImagesStyle>
      <ImageSocialStyle src={IconFacebook}/>
      <ImageSocialStyle src={IconInstagram}/>
      <ImageSocialStyle src={IconTwitter}/>
      <ImageSocialStyle src={IconLinkedin}/>
    </ContainerImagesStyle>
  )
}

export default Social