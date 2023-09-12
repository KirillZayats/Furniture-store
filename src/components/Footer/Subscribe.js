import React from "react";
import { TitleBlockStyle } from "../../styled/Footer/FooterStyledComp";
import { WhiteButtonInfoStyle } from "../../styled/Main/MainStyledComp";
import { LinkUnderLineStyle } from "../../styled/AppStyledComp";
import {
  SubscribePolicyTextStyle,
  SubscribeStyle,
  SubscribeTextStyle,
  FormSubscribeStyle,
  InputPolicyStyle
} from "../../styled/Footer/SubscribeStyledComp";


const Subscribe = () => {
  return (
    <SubscribeStyle>
      <TitleBlockStyle>Subscribe</TitleBlockStyle>
      <SubscribeTextStyle>
        Join our newsletter to stay up to date on features and releases.
      </SubscribeTextStyle>
      <FormSubscribeStyle>
        <InputPolicyStyle type="email" name="email" autoComplete="on" placeholder="Enter your email"/>
        <WhiteButtonInfoStyle>Subscribe</WhiteButtonInfoStyle>
      </FormSubscribeStyle>
      <SubscribePolicyTextStyle>
        By subscribing you agree to with our{" "}
        <LinkUnderLineStyle>Privacy Policy</LinkUnderLineStyle> and provide
        consent to receive updates from our company.
      </SubscribePolicyTextStyle>
    </SubscribeStyle>
  );
};

export default Subscribe;
