import React from "react";
import { InfoReservedStyle } from "../../styled/Footer/InfoReservedStyledComp";
import { LinkUnderLineStyle } from "../../styled/AppStyledComp";
import {
    TextReservedStyle,
    ContainerLinksStyle
  } from "../../styled/Footer/FooterStyledComp";

const InfoReserved = () => {
  return (
    <InfoReservedStyle>
      <TextReservedStyle>2023 Relume. All right reserved.</TextReservedStyle>
      <ContainerLinksStyle>
        <TextReservedStyle>
          <LinkUnderLineStyle>Privacy Policy</LinkUnderLineStyle>
        </TextReservedStyle>
        <TextReservedStyle>
          <LinkUnderLineStyle>Terms of Service</LinkUnderLineStyle>
        </TextReservedStyle>
        <TextReservedStyle>
          <LinkUnderLineStyle>Cookies Settings</LinkUnderLineStyle>
        </TextReservedStyle>
      </ContainerLinksStyle>
    </InfoReservedStyle>
  );
};

export default InfoReserved;
