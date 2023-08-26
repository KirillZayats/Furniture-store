import React from 'react'
import { styled } from "styled-components";
import IconSearch from "../resource/images/icons/search.svg";
import IconLogo from "../resource/images/icons/logotype.svg";

const HeaderStyle = styled.header`
  width: 320px;
`;

const HeaderContentStyle = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 21px 0;
`;

const SidebarStyle = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 4px;
`;

const SidebarElementsstyle = styled.div`
  width: 20px;
  height: 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 6px auto;
`;

const SidebarElementStyle = styled.div`
  width: 20px;
  height: 2px;
  background: #808080;
`;



const LogotypeStyle = styled.div`
  display: flex;
  gap: 8px;
`;

const LogotypeIconStyle = styled.img`
  margin: 0;
`;

const LogotypeTitleStyle = styled.span`
    font-family: Inter;
font-size: 25.067px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;


const SearchStyle = styled.div`
  margin: 0;
`;

const SearchIconStyle = styled.img`
  margin-top: 4px;
`;

const LineStyle = styled.div`
  height: 2px;
  width: 100%;
  background: #808080;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContentStyle>
      <SidebarStyle>
        <SidebarElementsstyle>
        <SidebarElementStyle/>
        <SidebarElementStyle/>
        <SidebarElementStyle/>
        </SidebarElementsstyle>
      </SidebarStyle>
      <LogotypeStyle>
        <LogotypeIconStyle src={IconLogo}></LogotypeIconStyle>
        <LogotypeTitleStyle>Zayakiri</LogotypeTitleStyle>
      </LogotypeStyle>
      <SearchStyle>
        <SearchIconStyle src={IconSearch}/>
      </SearchStyle>
      </HeaderContentStyle>
      <LineStyle/>
    </HeaderStyle>
  )
}

export default Header