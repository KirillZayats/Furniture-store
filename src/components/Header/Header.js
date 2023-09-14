import React, { useEffect, useRef, useState } from "react";
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
  ContainerBlockSetStyle,
  TextInfoStyle,
  ContainerSettingStyle,
  VerticalLineStyle,
  RightContainerInfoStyle,
  LeftContainerInfoStyle,
  UpBlockHeaderStyle,
  IconCartStyle,
  ImageSocialStyle,
  IconLeanguageStyle,
  IconSignStyle,
  ContainerSearchIconStyle,
} from "../../styled/Header/HeaderStyledComp";
import Logotype from "../Logotyle";
import { LinkStyle } from "../../styled/AppStyledComp";
import IconFacebook from "../../resource/images/icons/social/Facebook.svg";
import IconInstagram from "../../resource/images/icons/social/Instagram.svg";
import IconTwitter from "../../resource/images/icons/social/Twitter.svg";
import IconLinkedin from "../../resource/images/icons/social/LinkedIn.svg";
import { InputCheckBoxStyle } from "../../styled/Header/SidebarStyledComp";

const Header = () => {
  const [containerLogotype, setContainerLogotype] = useState("");
  const [containerSearch, setContainerSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [isOpenSearchBlock, setIsOpenSearchBlock] = useState(false);
  const [clickElements, setClickElements] = useState("");
  const [positionClient, setPositionClient] = useState(0);
  useEffect(() => {
    setContainerLogotype(document.getElementById("container-logotype"));
    setContainerSearch(document.querySelector(".container-search"));
    setInputSearch(document.querySelector("#search_products"));

    document.addEventListener("scroll", scrollPage);
  });

  const clickIconSearch = () => {
    if (!isOpenSearchBlock) {
      if (window.innerWidth < 1024) {
        containerSearch.style.width = "150px";
        containerSearch.style.border = `1px solid`;
        containerSearch.style.padding = "7px 19px";
        inputSearch.style.opacity = 1;
        inputSearch.style.width = "120px";
        inputSearch.focus();
      }
      if (window.innerWidth <= 768) {
        containerLogotype.style.opacity = 0;
        setTimeout(() => (containerLogotype.style.display = "none"), 150);
      }
      setIsOpenSearchBlock(true);
    } else {
      console.log("lol");
    }
  };

  const scrollPage = () => {
    if (
      window.scrollY >= 100 &&
      containerSearch != "" &&
      inputSearch != "" &&
      containerLogotype != ""
    ) {
      if (window.innerWidth < 1024) {
        containerSearch.style.width = "24px";
        containerSearch.style.border = `0px`;
        containerSearch.style.padding = "0px";
        inputSearch.style.opacity = 0;
        inputSearch.style.width = "0px";
      }
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          containerLogotype.style.display = "block";
        }, 200);
        setTimeout(() => {
          containerLogotype.style.opacity = 1;
        }, 300);
      }
      setIsOpenSearchBlock(false);
    }
  };

  const hideBlockInput = () => {
    console.log(clickElements);
    if (isOpenSearchBlock) {
      if (window.innerWidth < 1024) {
        containerSearch.style.width = "24px";
        containerSearch.style.border = `0px`;
        containerSearch.style.padding = "0px";
        inputSearch.style.opacity = 0;
        inputSearch.style.width = "0px";
      }
      if (window.innerWidth <= 425) {
        setTimeout(() => {
          containerLogotype.style.display = "block";
        }, 200);
        setTimeout(() => {
          containerLogotype.style.opacity = 1;
        }, 300);
      }
      setIsOpenSearchBlock(false);
    }
  };

  const clickSearchBlock = (e) => {
    setClickElements(e.target.tagName);
  };

  const loadHeader = () => {
    if (window.innerWidth >= 1024) {
      return (
        <HeaderContentStyle>
          <UpBlockHeaderStyle>
            <LeftContainerInfoStyle>
              <TextInfoStyle title="Our phone">
                Phone Number: 956 742 455 678
              </TextInfoStyle>
              <VerticalLineStyle />
              <TextInfoStyle title="Our email">
                Email:info@ddsgnr.com
              </TextInfoStyle>
            </LeftContainerInfoStyle>
            <RightContainerInfoStyle>
              <ContainerSocialStyle className="container-social__image">
                <LinkStyle href="https://www.facebook.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconFacebook}
                    alt="Icon Facebook"
                    title="Go to Facebook"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.instagram.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconInstagram}
                    alt="Icon Instagram"
                    title="Go to Instagram"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.twitter.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconTwitter}
                    alt="Icon Twitter"
                    title="Go to Twitter"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.linkedin.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconLinkedin}
                    alt="Icon Linkedin"
                    title="Go to LinedIn"
                  />
                </LinkStyle>
              </ContainerSocialStyle>
              <ContainerSettingStyle>
                <ContainerBlockSetStyle className="container_setting">
                  <IconLeanguageStyle />
                  <TextInfoStyle>English</TextInfoStyle>
                </ContainerBlockSetStyle>
                <ContainerBlockSetStyle className="container_setting">
                  <IconSignStyle />
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
              <ContainerSearchStyle className="container-search">
                <InputSearchStyle
                  type="text"
                  name="search"
                  id="search_products"
                  autoComplete="on"
                  placeholder="Search"
                />
                <ContainerSearchIconStyle onClick={clickIconSearch}>
                  <SearchIconStyle className="icon-search" />
                </ContainerSearchIconStyle>{" "}
              </ContainerSearchStyle>
              <ContainerCartStyle className="block_hover">
                <ContainerIconCartStyle className="container__link-cart">
                  <IconCartStyle />
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
                  <ContainerCartStyle className="block_hover">
                    <ContainerIconCartStyle className="container__link-cart">
                      <IconCartStyle />
                      <ContainerNumberProductsCartStyle>
                        <NumberProductsCartStyle>100</NumberProductsCartStyle>
                      </ContainerNumberProductsCartStyle>
                    </ContainerIconCartStyle>
                    <TitleCartStyle className="header__title-block">Cart</TitleCartStyle>
                  </ContainerCartStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <ContainerBlockSetStyle className="container_setting">
                    <IconLeanguageStyle />
                    <TextInfoStyle className="header__title-block">English</TextInfoStyle>
                  </ContainerBlockSetStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <ContainerBlockSetStyle className="container_setting">
                    <IconSignStyle />
                    <TextInfoStyle className="header__title-block">Sign In</TextInfoStyle>
                  </ContainerBlockSetStyle>
                </ElementListStyle>
              </ListStyle>
              <ContainerSocialStyle className="container-social__image">
                <LinkStyle href="https://www.facebook.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconFacebook}
                    alt="Icon Facebook"
                    title="Go to Facebook"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.instagram.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconInstagram}
                    alt="Icon Instagram"
                    title="Go to Instagram"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.twitter.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconTwitter}
                    alt="Icon Twitter"
                    title="Go to Twitter"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.linkedin.com/" target="_blank">
                  <ImageSocialStyle
                    src={IconLinkedin}
                    alt="Icon Linkedin"
                    title="Go to LinedIn"
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
            <ContainerSearchStyle
              className="container-search"
              onClick={clickSearchBlock}
            >
              <InputSearchStyle
                // onBlur={hideBlockInput}
                type="text"
                name="search"
                id="search_products"
                autoComplete="on"
                placeholder="Search"
              />
              <ContainerSearchIconStyle onClick={clickIconSearch} id="id_search_icon">
                <SearchIconStyle className="icon-search" />
              </ContainerSearchIconStyle>
            </ContainerSearchStyle>
          </HeaderBlockStyle>
        </HeaderContentStyle>
      );
    }
  };
  return loadHeader();
};

export default Header;
