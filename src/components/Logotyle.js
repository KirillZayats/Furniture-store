import React from "react";
import { ContainerLinkStyle } from "../styled/AppStyledComp";
import IconLogo from "../resource/images/icons/logotype.svg";
import {
  LogotypeIconStyle,
  LogotypeTitleStyle,
  LogotypeStyle,
} from "../styled/LogotypeStyledComp";
import { nameSite } from "../Constants";
import {LinkStyle} from "../styled/Footer/FooterStyledComp"
const Logotype = () => {
  return (
    <LogotypeStyle id="container-logotype">
      <LinkStyle to={`${nameSite}/`}>
        <ContainerLinkStyle>
          <LogotypeIconStyle src={IconLogo}></LogotypeIconStyle>
          <LogotypeTitleStyle>Zayakiri</LogotypeTitleStyle>
        </ContainerLinkStyle>
      </LinkStyle>
    </LogotypeStyle>
  );
};

export default Logotype;
