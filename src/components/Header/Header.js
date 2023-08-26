import React from "react";
import IconSearch from "../../resource/images/icons/search.svg";
import IconLogo from "../../resource/images/icons/logotype.svg";
import Sidebar from "./Sidebar";
import { ContainerLinkStyle } from "../../styled/AppStyledComp";
import { ContainerStyle } from "../../styled/AppStyledComp";
import {
  HeaderContentStyle,
  LogotypeIconStyle,
  LogotypeTitleStyle,
  LineStyle,
  SearchStyle,
  SearchIconStyle,
  HeaderBlockStyle
} from "../../styled/Header/HeaderStyledComp";

const Header = () => {
  return (
    <HeaderContentStyle>
      <ContainerStyle>
        <HeaderBlockStyle>
        <Sidebar />
        <ContainerLinkStyle>
          <LogotypeIconStyle src={IconLogo}></LogotypeIconStyle>
          <LogotypeTitleStyle>Zayakiri</LogotypeTitleStyle>
        </ContainerLinkStyle>
        <SearchStyle>
          <SearchIconStyle src={IconSearch} />
        </SearchStyle>
        </HeaderBlockStyle>
      </ContainerStyle>
      <LineStyle />
    </HeaderContentStyle>
  );
};

export default Header;
