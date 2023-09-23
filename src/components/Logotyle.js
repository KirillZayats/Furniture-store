import React from "react";
import { ContainerLinkStyle } from "../styled/AppStyledComp";
import IconLogo from "../resource/images/icons/logotype.svg";
import {
  LogotypeIconStyle,
  LogotypeTitleStyle,
  LogotypeStyle,
} from "../styled/LogotypeStyledComp";
import { NAME_SITE } from "../constants";
import {LinkStyle} from "../styled/Footer/FooterStyledComp"
const Logotype = () => {
  return (
    <LogotypeStyle id="container-logotype">
      <LinkStyle to={`${NAME_SITE}/`}>
        <ContainerLinkStyle>
          <LogotypeIconStyle src={IconLogo}></LogotypeIconStyle>
          <LogotypeTitleStyle>Zayakiri</LogotypeTitleStyle>
        </ContainerLinkStyle>
      </LinkStyle>
    </LogotypeStyle>
  );
};

export default Logotype;
