import React from "react";
import IconSearch from "../../resource/images/icons/search.svg";
import Sidebar from "./Sidebar";
import {
  HeaderContentStyle,
  LineStyle,
  TopLineStyle,
  SearchStyle,
  SearchIconStyle,
  HeaderBlockStyle,
  ChangePlaceStyle,
  ContainerContactsBarMenuStyle,
  ContainerSocialStyle,
  ContainerIconCartStyle,
  NumberProductsCartStyle,
  ContainerNumberProductsCartStyle,
  TitleCartStyle,
  ContainerCartStyle,
  InputSearchStyle,
  ContainerSearchStyle,
  LinkNavStyle,
  ElementListStyle,
  ListStyle,
  NavStyle,
  IconSettingStyle,
  ContainerBlockSetStyle,
  TextInfoStyle,
  ContainerSettingStyle,
  VerticalLineStyle,
  RightContainerInfoStyle,
  LeftContainerInfoStyle,
  UpBlockHeaderStyle,
  IconCartStyle,
  ImageSocialStyle
} from "../../styled/Header/HeaderStyledComp";
import Logotype from "../Logotyle";
import { LinkStyle } from "../../styled/AppStyledComp";

import IconFacebook from "../../resource/images/icons/social/Facebook.svg";
import IconInstagram from "../../resource/images/icons/social/Instagram.svg";
import IconTwitter from "../../resource/images/icons/social/Twitter.svg";
import IconLinkedin from "../../resource/images/icons/social/LinkedIn.svg";
import IconGlobal from "../../resource/images/icons/header_icons/global.svg";
import IconUser from "../../resource/images/icons/header_icons/user.svg";
import IconBasket from "../../resource/images/icons/header_icons/shopping_cart.svg";
import { InputCheckBoxStyle } from "../../styled/Header/SidebarStyledComp";



const Header = () => {
  const loadHeader = () => {
    if (window.innerWidth >= 1024) {
      return (
        <HeaderContentStyle>
          <UpBlockHeaderStyle>
            <LeftContainerInfoStyle>
              <TextInfoStyle>Phone Number: 956 742 455 678</TextInfoStyle>
              <VerticalLineStyle />
              <TextInfoStyle>Email:info@ddsgnr.com</TextInfoStyle>
            </LeftContainerInfoStyle>
            <RightContainerInfoStyle>
              <ContainerSocialStyle>
                <LinkStyle href="https://www.facebook.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconFacebook}
                    alt="Facebook"
                    title="Icon faceBook"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.instagram.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconInstagram}
                    alt="Instagram"
                    title="Icon instagram"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.twitter.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconTwitter}
                    alt="Twitter"
                    title="Icon Twitter"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.linkedin.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconLinkedin}
                    alt="Linkedin"
                    title="Icon lined in"
                  />
                </LinkStyle>
              </ContainerSocialStyle>
              <ContainerSettingStyle>
                <ContainerBlockSetStyle>
                  <IconSettingStyle src={IconGlobal} alt="" title="" />
                  <TextInfoStyle>English</TextInfoStyle>
                </ContainerBlockSetStyle>
                <ContainerBlockSetStyle>
                  <IconSettingStyle src={IconUser} alt="" title="" />
                  <TextInfoStyle>Sign In</TextInfoStyle>
                </ContainerBlockSetStyle>
              </ContainerSettingStyle>
            </RightContainerInfoStyle>
          </UpBlockHeaderStyle>
          <TopLineStyle />
          <HeaderBlockStyle>
            <Logotype />
            <NavStyle>
              <ListStyle>
                <ElementListStyle>
                  <LinkNavStyle>Home</LinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <LinkNavStyle>Products</LinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <LinkNavStyle>About Us</LinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <LinkNavStyle>Contact</LinkNavStyle>
                </ElementListStyle>
              </ListStyle>
              <ContainerSearchStyle>
                <InputSearchStyle
                  type="text"
                  name="search"
                  id="search_products"
                  autoComplete="on"
                  placeholder="Search"
                />
                <SearchIconStyle src={IconSearch} />
              </ContainerSearchStyle>
              <ContainerCartStyle>
                <ContainerIconCartStyle>
                  <IconCartStyle src={IconBasket} />
                  <ContainerNumberProductsCartStyle>
                    <NumberProductsCartStyle>100</NumberProductsCartStyle>
                  </ContainerNumberProductsCartStyle>
                </ContainerIconCartStyle>
                <TitleCartStyle>Cart</TitleCartStyle>
              </ContainerCartStyle>
            </NavStyle>
          </HeaderBlockStyle>
          <LineStyle />
        </HeaderContentStyle>
      );
    } else {
      return (
        <HeaderContentStyle>
          <HeaderBlockStyle>
            <NavStyle>
              <InputCheckBoxStyle type="checkbox" id="checked" />
              <Sidebar />
              <ListStyle>
                <ElementListStyle>
                  <LinkNavStyle>Home</LinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <LinkNavStyle>Products</LinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <LinkNavStyle>About Us</LinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <LinkNavStyle>Contact</LinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <ContainerCartStyle className="div_hover">
                    <ContainerIconCartStyle>
                      <IconCartStyle src={IconBasket} />
                      <ContainerNumberProductsCartStyle>
                        <NumberProductsCartStyle>100</NumberProductsCartStyle>
                      </ContainerNumberProductsCartStyle>
                    </ContainerIconCartStyle>
                    <TitleCartStyle>Cart</TitleCartStyle>
                  </ContainerCartStyle>
                </ElementListStyle>
              </ListStyle>
              <ContainerSocialStyle>
              <LinkStyle href="https://www.facebook.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconFacebook}
                    alt="Facebook"
                    title="Icon faceBook"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.instagram.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconInstagram}
                    alt="Instagram"
                    title="Icon instagram"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.twitter.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconTwitter}
                    alt="Twitter"
                    title="Icon Twitter"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.linkedin.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconLinkedin}
                    alt="Linkedin"
                    title="Icon lined in"
                  />
                </LinkStyle>
              </ContainerSocialStyle>
              <ContainerContactsBarMenuStyle>
                <TextInfoStyle>Email: info@ddsgnr.com</TextInfoStyle>
                <TextInfoStyle>Phone Number: 956 742 455 678</TextInfoStyle>
              </ContainerContactsBarMenuStyle>
              <ChangePlaceStyle />
            </NavStyle>
            <Logotype />
            {/* <ContainerSearchStyle>
              <InputSearchStyle placeholder="Search" />
            </ContainerSearchStyle> */}
            <SearchIconStyle src={IconSearch} />
          </HeaderBlockStyle>
        </HeaderContentStyle>
      );
    }
  };
  return loadHeader();
};

export default Header;
