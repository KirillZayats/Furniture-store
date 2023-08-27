import React from "react";
import IconSearch from "../../resource/images/icons/search.svg";
import Sidebar from "./Sidebar";
import { ContainerStyle } from "../../styled/AppStyledComp";
import {
  HeaderContentStyle,
  LineStyle,
  SearchStyle,
  SearchIconStyle,
  HeaderBlockStyle
} from "../../styled/Header/HeaderStyledComp";
import Logotype from "../Logotyle";

const Header = () => {
  return (
    <HeaderContentStyle>
      <ContainerStyle>
        <HeaderBlockStyle>
        <Sidebar />
        <Logotype/>
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
