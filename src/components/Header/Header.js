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
} from "../../styled/Header/HeaderStyledComp";
import Logotype from "../Logotyle";
import { LinkStyle } from "../../styled/AppStyledComp";

import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";
import { ImageSocialStyle } from "../../styled/Footer/SocialStyledComp";
import IconFacebook from "../../resource/images/icons/social/Facebook.svg";
import IconInstagram from "../../resource/images/icons/social/Instagram.svg";
import IconTwitter from "../../resource/images/icons/social/Twitter.svg";
import IconLinkedin from "../../resource/images/icons/social/LinkedIn.svg";
import IconGlobal from "../../resource/images/icons/header_icons/global.svg";
import IconUser from "../../resource/images/icons/header_icons/user.svg";
import IconBasket from "../../resource/images/icons/header_icons/shopping_cart.svg";
import { InputCheckBoxStyle } from "../../styled/Header/SidebarStyledComp";

const UpBlockHeaderStyle = styled.div`
  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;
  }

  @media ${device.desktop} {
    margin: 0 70px;
  }
`;

const LeftContainerInfoStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const RightContainerInfoStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;
const VerticalLineStyle = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.colors.rearColor};
`;
const ContainerSettingStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const TextInfoStyle = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  min-width: 45px;

  @media ${device.mobileS} {
    flex-direction: column;
    font-size: 10px;
  }

  @media ${device.laptop} {
    font-size: 14px;
  }
`;

const ContainerBlockSetStyle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
    cursor: pointer;

`;

const IconSettingStyle = styled.img``;

const NavStyle = styled.nav`
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.laptop} {
    height: auto;
    width: auto;
    flex-direction: row;
    gap: 32px;
    align-items: center;
  }
`;
const ListStyle = styled.ul`
  display: flex;

  @media ${device.mobileS} {
    position: fixed;
    flex-direction: column;
    gap: 15px;
    opacity: 0;
    transition: all 0.4s ease-in;
    height: 100%;
    top: 0;
    left: -200px;
    padding: 60px 30px 0px 30px;
  }

  @media ${device.laptop} {
    width: auto;
    height: auto;
    position: static;
    flex-direction: row;
    gap: 32px;
    opacity: 1;
    background: none;
    padding: 0;
  }
`;
const ElementListStyle = styled.li`
  display: flex;
  @media ${device.mobileS} {
    width: 105px;
  }

  @media ${device.laptop} {
    align-items: center;
    width: auto;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
  }
`;
const LinkNavStyle = styled.a`
  width: 100%;
  text-align: right;
`;
const ContainerSearchStyle = styled.div`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  padding: 7px 19px;
  height: 24px;
  display: flex;
  flex-direction: row;
  width: 86px;
  justify-content: space-between;
`;
const InputSearchStyle = styled.input`
  width: 50px;
  border: none;
  outline: none;
`;
const ContainerCartStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media ${device.mobileS} {
    margin-left: auto;
  }
  @media ${device.laptop} {
    margin-left: 0;
  }
`;
const IconCartStyle = styled.img`
  @media ${device.mobileS} {
    filter: brightness(0) invert(1);
  }
  @media ${device.laptop} {
    filter: none;
  }
`;
const TitleCartStyle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const ContainerNumberProductsCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  left: -10px;
  top: -5px;
  text-align: center;
  @media ${device.mobileS} {
    background: ${({ theme }) => theme.colors.secondColor};
    color: ${({ theme }) => theme.colors.mainColor};
  }
  @media ${device.laptop} {
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.secondColor};
  }
`;

const NumberProductsCart = styled.span`
  font-size: 9px;
`;

const ContainerIconCartStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 0;
`;

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
                <LinkStyle href="https://www.facebook.com/" target="_black">
                  <ImageSocialStyle
                    src={IconFacebook}
                    alt="Facebook"
                    title="Icon faceBook"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.instagram.com/" target="_black">
                  <ImageSocialStyle
                    src={IconInstagram}
                    alt="Instagram"
                    title="Icon instagram"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.twitter.com/" target="_black">
                  <ImageSocialStyle
                    src={IconTwitter}
                    alt="Twitter"
                    title="Icon Twitter"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.linkedin.com/" target="_black">
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
                  <ContainerNumberProductsCart>
                    <NumberProductsCart>100</NumberProductsCart>
                  </ContainerNumberProductsCart>
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
                  <ContainerCartStyle>
                    <ContainerIconCartStyle>
                      <IconCartStyle src={IconBasket} />
                      <ContainerNumberProductsCart>
                        <NumberProductsCart>100</NumberProductsCart>
                      </ContainerNumberProductsCart>
                    </ContainerIconCartStyle>
                    <TitleCartStyle>Cart</TitleCartStyle>
                  </ContainerCartStyle>
                </ElementListStyle>
              </ListStyle>
              <ContainerSocialStyle>
              <LinkStyle href="https://www.facebook.com/" target="_black">
                  <ImageSocialStyle
                    src={IconFacebook}
                    alt="Facebook"
                    title="Icon faceBook"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.instagram.com/" target="_black">
                  <ImageSocialStyle
                    src={IconInstagram}
                    alt="Instagram"
                    title="Icon instagram"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.twitter.com/" target="_black">
                  <ImageSocialStyle
                    src={IconTwitter}
                    alt="Twitter"
                    title="Icon Twitter"
                  />
                </LinkStyle>
                <LinkStyle href="https://www.linkedin.com/" target="_black">
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
