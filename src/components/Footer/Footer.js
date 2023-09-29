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
  BlocksStyle,
} from "../../styled/Footer/FooterStyledComp";
import Subscribe from "./Subscribe";
import { LineStyle } from "../../styled/Header/HeaderStyledComp";
import InfoReserved from "./InfoReserved";
import Social from "./Social";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
const Footer = () => {
  const { categories } = useSelector((state) => state.categories);
  const { setCategory } = useAction();

  const clickCategory = (e) => {
    setCategory(e.target.innerText);
  }

  return (
    <FooterContentStyle>
      <ContainerStyle>
        <ContainerMainInfoFooter>
          <BlocksStyle>
            <Logotype />
            <BlockStyle>
              <TitleBlockStyle>Categories</TitleBlockStyle>
              <ContainerListStyle>
                {categories.map((category, index) => (
                  <ListElementStyle key={index}>
                    <LinkStyle onClick={clickCategory} to={`/products#${category}`}>{category}</LinkStyle>
                  </ListElementStyle>
                ))}
              </ContainerListStyle>
            </BlockStyle>
            <BlockStyle>
              <TitleBlockStyle>About</TitleBlockStyle>
              <ContainerListStyle>
                <ListElementStyle>
                  <LinkStyle to={`/contacts`}>Contact Us</LinkStyle>
                </ListElementStyle>
                <ListElementStyle>
                  <LinkStyle to={`/about`}>About Us</LinkStyle>
                </ListElementStyle>
                <ListElementStyle>
                  <LinkStyle to={`/contacts`}>
                    Support/Help
                  </LinkStyle>
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
