import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {
  HeaderContentStyle,
  LineStyle,
  TopLineStyle,
  SearchIconStyle,
  HeaderBlockStyle,
  ContainerContactsBarMenuStyle,
  ContainerSocialStyle,
  ContainerIconCartStyle,
  NumberProductsCartStyle,
  ContainerNumberProductsCartStyle,
  TitleCartStyle,
  ContainerCartStyle,
  InputSearchStyle,
  ContainerSearchStyle,
  LinkSpanNavStyle,
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
  LinkElement,
  ContainerLinkNavStyle,
} from "../../styled/Header/HeaderStyledComp";
import Logotype from "../Logotyle";
import { LinkStyle } from "../../styled/AppStyledComp";
import IconFacebook from "../../resource/images/icons/social/Facebook.svg";
import IconInstagram from "../../resource/images/icons/social/Instagram.svg";
import IconTwitter from "../../resource/images/icons/social/Twitter.svg";
import IconLinkedin from "../../resource/images/icons/social/LinkedIn.svg";
import { InputCheckBoxStyle } from "../../styled/Header/SidebarStyledComp";
import SidebarActive from "./SidebarActive";
import { IS_LOGGED, NAME_SITE } from "../../constants";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import { getCookie } from "../../storage/cookie";

const Header = () => {
  const [containerLogotype, setContainerLogotype] = useState("");
  const [containerSearch, setContainerSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [isOpenSearchBlock, setIsOpenSearchBlock] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [sidebar, setSidebar] = useState("");
  const [inputCheckbox, setInputCheckbox] = useState("");
  const { pathname } = useLocation();
  const [buttonDownUp, setButtonDownUp] = useState("");
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const countProducts = useSelector(
    (state) => state.cartProduct.productsCart.length
  );
  const { getValueSearch } = useAction();

  useEffect(() => {
    window.scrollTo(0, 0);
    closeSidebar();
  }, [pathname]);

  useEffect(() => {
    setContainerLogotype(document.getElementById("container-logotype"));
    setContainerSearch(document.querySelector(".container-search"));
    setInputSearch(document.querySelector("#search_products"));
    setSidebar(document.getElementById("sidebar"));
    setButtonDownUp(document.getElementById("down-up"));
    if (window.innerWidth < 1024)
      setInputCheckbox(document.getElementById("checked"));
    document.addEventListener("scroll", scrollPage);
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWidthWindow(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  }, []);

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
      console.log("find");
    }
  };

  const scrollPage = () => {
    closeSearchBlock();
    closeSidebar();
  };

  function closeSidebar() {
    if (window.innerWidth < 1024) {
      if (inputCheckbox.checked && inputCheckbox !== "") {
        inputCheckbox.checked = false;
      }
    }
  }

  function closeSearchBlock() {
    if (
      window.scrollY >= 100 &&
      containerSearch !== "" &&
      inputSearch !== "" &&
      containerLogotype !== ""
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
    if (window.scrollY >= 800 && buttonDownUp !== "") {
      viewButtonDownUp();
    }
    if (window.scrollY < 800 && buttonDownUp !== "") {
      hideButtonDownUp();
    }
  }

  const viewButtonDownUp = () => {
    buttonDownUp.style.opacity = 1;
    buttonDownUp.style.bottom = "20px";
  };

  const hideButtonDownUp = () => {
    buttonDownUp.style.opacity = 0;
    buttonDownUp.style.bottom = "-50px";
  };

  const toggleSidebar = () => {
    if (!isOpenSidebar) {
      setTimeout(() => {
        sidebar.style.top = "-60px";
      }, 600);
      setIsOpenSidebar(true);
    } else {
      sidebar.style.top = "0px";
      setIsOpenSidebar(false);
    }
  };

  const searchProducts = (e) => {
    getValueSearch(e.target.value);
  };

  const loadHeader = () => {
    if (widthWindow >= 1024) {
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
                {getCookie(IS_LOGGED) === "true" ? (
                  <LinkElement to={`${NAME_SITE}/account`}>
                    <ContainerBlockSetStyle className="container_setting">
                      <IconSignStyle />
                      <TextInfoStyle className="header__title-block">
                        Account
                      </TextInfoStyle>
                    </ContainerBlockSetStyle>
                  </LinkElement>
                ) : (
                  <LinkElement to={`${NAME_SITE}/login`}>
                    <ContainerBlockSetStyle className="container_setting">
                      <IconSignStyle />
                      <TextInfoStyle className="header__title-block">
                        Sign In
                      </TextInfoStyle>
                    </ContainerBlockSetStyle>
                  </LinkElement>
                )}
              </ContainerSettingStyle>
            </RightContainerInfoStyle>
          </UpBlockHeaderStyle>
          <TopLineStyle />
          <HeaderBlockStyle>
            <Logotype />
            <NavStyle>
              <ListStyle>
                <ElementListStyle>
                  <ContainerLinkNavStyle to={`${NAME_SITE}/`}>
                    <LinkSpanNavStyle>Home</LinkSpanNavStyle>
                  </ContainerLinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <ContainerLinkNavStyle to={`${NAME_SITE}/products`}>
                    <LinkSpanNavStyle>Products</LinkSpanNavStyle>
                  </ContainerLinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <ContainerLinkNavStyle to={`${NAME_SITE}/about`}>
                    <LinkSpanNavStyle>About Us</LinkSpanNavStyle>
                  </ContainerLinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <ContainerLinkNavStyle to={`${NAME_SITE}/contacts`}>
                    <LinkSpanNavStyle>Contact</LinkSpanNavStyle>
                  </ContainerLinkNavStyle>
                </ElementListStyle>
              </ListStyle>
              <ContainerSearchStyle className="container-search">
                <InputSearchStyle
                  onChange={searchProducts}
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
              <LinkElement to={`${NAME_SITE}/cart`}>
                <ContainerCartStyle className="block_hover">
                  <ContainerIconCartStyle className="container__link-cart">
                    <IconCartStyle />
                    <ContainerNumberProductsCartStyle>
                      <NumberProductsCartStyle>
                        {countProducts}
                      </NumberProductsCartStyle>
                    </ContainerNumberProductsCartStyle>
                  </ContainerIconCartStyle>
                  <TitleCartStyle>Cart</TitleCartStyle>
                </ContainerCartStyle>
              </LinkElement>
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
              <InputCheckBoxStyle
                type="checkbox"
                id="checked"
                onClick={toggleSidebar}
              />
              <Sidebar />
              <SidebarActive />
              <ListStyle>
                <ElementListStyle>
                  <ContainerLinkNavStyle to={`${NAME_SITE}/`}>
                    <LinkSpanNavStyle>Home</LinkSpanNavStyle>
                  </ContainerLinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <ContainerLinkNavStyle to={`${NAME_SITE}/products`}>
                    <LinkSpanNavStyle>Products</LinkSpanNavStyle>
                  </ContainerLinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <ContainerLinkNavStyle to={`${NAME_SITE}/about`}>
                    <LinkSpanNavStyle>About Us</LinkSpanNavStyle>
                  </ContainerLinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <ContainerLinkNavStyle to={`${NAME_SITE}/contacts`}>
                    <LinkSpanNavStyle>Contact</LinkSpanNavStyle>
                  </ContainerLinkNavStyle>
                </ElementListStyle>
                <ElementListStyle>
                  <LinkElement to={`${NAME_SITE}/cart`}>
                    <ContainerCartStyle className="block_hover">
                      <ContainerIconCartStyle className="container__link-cart">
                        <IconCartStyle />
                        <ContainerNumberProductsCartStyle>
                          <NumberProductsCartStyle>
                            {countProducts}
                          </NumberProductsCartStyle>
                        </ContainerNumberProductsCartStyle>
                      </ContainerIconCartStyle>
                      <TitleCartStyle className="header__title-block">
                        Cart
                      </TitleCartStyle>
                    </ContainerCartStyle>
                  </LinkElement>
                </ElementListStyle>
                <ElementListStyle>
                  <LinkElement to={`${NAME_SITE}/`}>
                    <ContainerBlockSetStyle className="container_setting">
                      <IconLeanguageStyle />
                      <TextInfoStyle className="header__title-block">
                        English
                      </TextInfoStyle>
                    </ContainerBlockSetStyle>
                  </LinkElement>
                </ElementListStyle>
                <ElementListStyle>
                  {getCookie(IS_LOGGED) === "true" ? (
                    <LinkElement to={`${NAME_SITE}/account`}>
                      <ContainerBlockSetStyle className="container_setting">
                        <IconSignStyle />
                        <TextInfoStyle className="header__title-block">
                          Account
                        </TextInfoStyle>
                      </ContainerBlockSetStyle>
                    </LinkElement>
                  ) : (
                    <LinkElement to={`${NAME_SITE}/login`}>
                      <ContainerBlockSetStyle className="container_setting">
                        <IconSignStyle />
                        <TextInfoStyle className="header__title-block">
                          Sign In
                        </TextInfoStyle>
                      </ContainerBlockSetStyle>
                    </LinkElement>
                  )}
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
            </NavStyle>
            <Logotype />
            <ContainerSearchStyle className="container-search">
              <InputSearchStyle
                onChange={searchProducts}
                type="text"
                name="search"
                id="search_products"
                autoComplete="on"
                placeholder="Search"
              />
              <ContainerSearchIconStyle
                onClick={clickIconSearch}
                id="id_search_icon"
              >
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
