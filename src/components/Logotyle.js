import React from "react";
import { ContainerLinkStyle } from "../styled/AppStyledComp";
import IconLogo from "../resource/images/icons/logotype.svg"
import {
  LogotypeIconStyle,
  LogotypeTitleStyle,
  LogotypeStyle,
} from "../styled/LogotypeStyledComp";

const Logotype = () => {
  return (
    <LogotypeStyle id="container-logotype">
      <ContainerLinkStyle>
        <LogotypeIconStyle src={IconLogo}></LogotypeIconStyle>
        <LogotypeTitleStyle>Zayakiri</LogotypeTitleStyle>
      </ContainerLinkStyle>
    </LogotypeStyle>
  );
};

export default Logotype;
