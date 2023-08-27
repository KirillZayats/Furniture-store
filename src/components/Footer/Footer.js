import React from "react";
import { ContainerStyle } from "../../styled/AppStyledComp";
import Logotype from "../Logotyle";
import { ContainerContactsStyle } from "../../styled/Main/MainStyledComp";
import {
  FooterContentStyle,
  TitleBlockStyle,
  ListElementStyle,
  LinkStyle,
} from "../../styled/Footer/FooterStyledComp";
import Subscribe from "./Subscribe";
import { LineStyle } from "../../styled/Header/HeaderStyledComp";
import InfoReserved from "./InfoReserved";
import Social from "./Social";

const Footer = () => {
  return (
    <FooterContentStyle>
      <ContainerStyle>
        <Logotype />
        <TitleBlockStyle>Categories</TitleBlockStyle>
        <ContainerContactsStyle>
          <ListElementStyle>
            <LinkStyle>Wall art</LinkStyle>
          </ListElementStyle>
          <ListElementStyle>
            <LinkStyle>Wall art</LinkStyle>
          </ListElementStyle>
          <ListElementStyle>
            <LinkStyle>Wall art</LinkStyle>
          </ListElementStyle>
          <ListElementStyle>
            <LinkStyle>Wall art</LinkStyle>
          </ListElementStyle>
          <ListElementStyle>
            <LinkStyle>Wall art</LinkStyle>
          </ListElementStyle>
        </ContainerContactsStyle>
        <TitleBlockStyle>About</TitleBlockStyle>
        <ContainerContactsStyle>
          <ListElementStyle>
            <LinkStyle>Contact Us</LinkStyle>
          </ListElementStyle>
          <ListElementStyle>
            <LinkStyle>About Us</LinkStyle>
          </ListElementStyle>
          <ListElementStyle>
            <LinkStyle>Support/Help</LinkStyle>
          </ListElementStyle>
          <ListElementStyle>
            <LinkStyle>FAQ</LinkStyle>
          </ListElementStyle>
        </ContainerContactsStyle>
        <Subscribe/>
        <LineStyle/>
        <InfoReserved/>
        <Social/>
      </ContainerStyle>
    </FooterContentStyle>
  );
};

export default Footer;
