import React from "react";
import { ContainerStyle } from "../../styled/AppStyledComp";
import Logotype from "../Logotyle";
import { ContainerListStyle } from "../../styled/Main/MainStyledComp";
import {
  FooterContentStyle,
  TitleBlockStyle,
  ListElementStyle,
  LinkStyle,
  ContainerReserverSocialStyle,
  ContainerMainInfoFooter,
  BlockStyle,
  BlocksStyle
} from "../../styled/Footer/FooterStyledComp";
import Subscribe from "./Subscribe";
import { LineStyle } from "../../styled/Header/HeaderStyledComp";
import InfoReserved from "./InfoReserved";
import Social from "./Social";

const Footer = () => {
  return (
    <FooterContentStyle>
      <ContainerStyle>
        <ContainerMainInfoFooter>
          <BlocksStyle>
          <Logotype />
            <BlockStyle>
              <TitleBlockStyle>Categories</TitleBlockStyle>
              <ContainerListStyle>
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
              </ContainerListStyle>
            </BlockStyle>
            <BlockStyle>
              <TitleBlockStyle>About</TitleBlockStyle>
              <ContainerListStyle>
                <ListElementStyle>
                  <LinkStyle href="#" target="_blank">Contact Us</LinkStyle>
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
                <ListElementStyle>
                  <LinkStyle>Link Fifteen</LinkStyle>
                </ListElementStyle>
              </ContainerListStyle>
            </BlockStyle>
          </BlocksStyle>
          <Subscribe />
        </ContainerMainInfoFooter>
        <LineStyle />
        <ContainerReserverSocialStyle>
          <InfoReserved />
          <Social />
        </ContainerReserverSocialStyle>
      </ContainerStyle>
    </FooterContentStyle>
  );
};

export default Footer;
