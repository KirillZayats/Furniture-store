import { styled } from "styled-components";
import { device, size } from "../Media/MediaQueryStyledComp";
import { SidebarStyle } from "./SidebarStyledComp";
import { SidebarActiveStyle } from "./SidebarActiveStyledComp";
import { Link } from "react-router-dom";
import IconArrow from "../../resource/images/icons/Icon";

const HeaderContentStyle = styled.header`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: ${size.mobileS};
  }

  @media ${device.mobileM} {
    max-width: ${size.mobileM};
  }
  @media ${device.mobileL} {
    max-width: ${size.mobileL};
  }

  @media ${device.tablet} {
    max-width: ${size.tablet};
  }
  @media ${device.tabletS} {
    max-width: ${size.tabletS};
  }

  @media ${device.laptop} {
    max-width: ${size.laptop};
  }

  @media ${device.desktop} {
    max-width: ${size.desktop};
  }
`;

const ChangePlaceStyle = styled.div`
  height: 24px;
  width: 24px;
  display: none;
`;

const ContainerContactsBarMenuStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: -50px;
  transition: all 0.5s ease-in;
  text-align: center;
  left: 10px;
`;

const ContainerSocialStyle = styled.div`
  height: 24px;
  display: flex;
  gap: 12px;
  left: -145px;
  bottom: 50px;
  transition: all 0.5s ease-in;

  @media ${device.mobileS} {
    position: fixed;
  }

  @media ${device.laptop} {
    position: static;
  }
`;

const HeaderBlockStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 0;

  input[type="checkbox"]:checked ~ ${SidebarStyle} span {
    opacity: 0;
  }

  input[type="checkbox"]:checked ~ ${SidebarActiveStyle} {
    left: 10px;
  }

  input[type="checkbox"]:checked ~ ${SidebarStyle} {
    position: relative;
  }

  input[type="checkbox"]:checked ~ ul {
    opacity: 1;
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.secondColor};
    height: 100%;
    padding: 60px 30px 0px 30px;
    left: 0px;
    transition: all 0.5s ease-in;
    a:visited {
      color: ${({ theme }) => theme.colors.secondColor};
    }
    a:visited:hover {
      color: ${({ theme }) => theme.colors.textButtonPayColor};
    }
  }
  input[type="checkbox"]:checked ~ ${ChangePlaceStyle} {
    display: block;
  }

  input[type="checkbox"]:checked ~ ${ContainerContactsBarMenuStyle} {
    color: ${({ theme }) => theme.colors.secondColor};
    bottom: 15px;
  }

  input[type="checkbox"]:checked ~ ${ContainerSocialStyle} {
    left: 15px;
    bottom: 50px;
  }

  @media ${device.mobileS} {
    margin: 0 10px;
  }

  @media ${device.mobileL} {
    margin: 0 25px;
  }

  @media ${device.tablet} {
    margin: 0 50px;
  }

  @media ${device.desktop} {
    margin: 0 70px;
  }
`;

const SearchStyle = styled.div`
  margin: 0;
`;

const Svg = styled(IconArrow)`
  width: 24px;
  height: 24px;
`;

const ContainerSearchIconStyle = styled.div``;

const SearchIconStyle = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path
      d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
      fill="#676767"
    />
    <path
      d="M21.9999 22.7499C21.8099 22.7499 21.6199 22.6799 21.4699 22.5299L19.4699 20.5299C19.1799 20.2399 19.1799 19.7599 19.4699 19.4699C19.7599 19.1799 20.2399 19.1799 20.5299 19.4699L22.5299 21.4699C22.8199 21.7599 22.8199 22.2399 22.5299 22.5299C22.3799 22.6799 22.1899 22.7499 21.9999 22.7499Z"
      fill="#676767"
    />
  </Svg>
);

const LineStyle = styled.div`
  height: 0.1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.rearColor};
`;

const TopLineStyle = styled.div`
  height: 0.1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.mainColor};

  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }
`;

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
  @media ${device.mobileS} {
    color: ${({ theme }) => theme.colors.secondColor};
    font-size: 10px;
  }

  @media ${device.laptop} {
    min-width: 45px;
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: 14px;
  }
`;

const ContainerBlockSetStyle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  @media ${device.mobileS} {
    margin-left: auto;
    & path {
      fill: ${({ theme }) => theme.colors.secondColor};
    }
  }

  @media ${device.laptop} {
    margin-left: 0px;
    & path {
      fill: ${({ theme }) => theme.colors.mainColor};
    }
  }
  & p {
    font-size: 14px;
  }
`;

const SvgSpecial = styled(IconArrow)`
  width: 18px;
  height: 18px;
`;

const IconLeanguageStyle = ({ className }) => (
  <SvgSpecial viewBox="0 0 18 18" className={className}>
    <path
      d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z"
      fill="#292D32"
    />
    <path
      d="M6.75018 16.3125H6.00018C5.69268 16.3125 5.43768 16.0575 5.43768 15.75C5.43768 15.4425 5.67768 15.195 5.98518 15.1875C4.80768 11.1675 4.80768 6.8325 5.98518 2.8125C5.67768 2.805 5.43768 2.5575 5.43768 2.25C5.43768 1.9425 5.69268 1.6875 6.00018 1.6875H6.75018C6.93018 1.6875 7.10268 1.7775 7.20768 1.92C7.31268 2.07 7.34268 2.2575 7.28268 2.43C5.87268 6.6675 5.87268 11.3325 7.28268 15.5775C7.34268 15.75 7.31268 15.9375 7.20768 16.0875C7.10268 16.2225 6.93018 16.3125 6.75018 16.3125Z"
      fill="#292D32"
    />
    <path
      d="M11.2498 16.3125C11.1898 16.3125 11.1298 16.305 11.0698 16.2825C10.7773 16.185 10.6123 15.8625 10.7173 15.57C12.1273 11.3325 12.1273 6.66751 10.7173 2.42251C10.6198 2.13001 10.7773 1.80751 11.0698 1.71001C11.3698 1.61251 11.6848 1.77001 11.7823 2.06251C13.2748 6.53251 13.2748 11.4525 11.7823 15.915C11.7073 16.1625 11.4823 16.3125 11.2498 16.3125Z"
      fill="#292D32"
    />
    <path
      d="M9 12.9001C6.9075 12.9001 4.8225 12.6076 2.8125 12.0151C2.805 12.3151 2.5575 12.5626 2.25 12.5626C1.9425 12.5626 1.6875 12.3076 1.6875 12.0001V11.2501C1.6875 11.0701 1.7775 10.8976 1.92 10.7926C2.07 10.6876 2.2575 10.6576 2.43 10.7176C6.6675 12.1276 11.34 12.1276 15.5775 10.7176C15.75 10.6576 15.9375 10.6876 16.0875 10.7926C16.2375 10.8976 16.32 11.0701 16.32 11.2501V12.0001C16.32 12.3076 16.065 12.5626 15.7575 12.5626C15.45 12.5626 15.2025 12.3226 15.195 12.0151C13.1775 12.6076 11.0925 12.9001 9 12.9001Z"
      fill="#292D32"
    />
    <path
      d="M15.7498 7.31252C15.6898 7.31252 15.6298 7.30502 15.5698 7.28252C11.3323 5.87252 6.65984 5.87252 2.42234 7.28252C2.12234 7.38002 1.80734 7.22252 1.70984 6.93002C1.61984 6.63002 1.77734 6.31502 2.06984 6.21752C6.53984 4.72502 11.4598 4.72502 15.9223 6.21752C16.2148 6.31502 16.3798 6.63752 16.2748 6.93002C16.2073 7.16252 15.9823 7.31252 15.7498 7.31252Z"
      fill="#292D32"
    />
  </SvgSpecial>
);
const IconSignStyle = ({ className }) => (
  <SvgSpecial viewBox="0 0 18 18" className={className}>
    <path
      d="M9 9.5625C6.6225 9.5625 4.6875 7.6275 4.6875 5.25C4.6875 2.8725 6.6225 0.9375 9 0.9375C11.3775 0.9375 13.3125 2.8725 13.3125 5.25C13.3125 7.6275 11.3775 9.5625 9 9.5625ZM9 2.0625C7.245 2.0625 5.8125 3.495 5.8125 5.25C5.8125 7.005 7.245 8.4375 9 8.4375C10.755 8.4375 12.1875 7.005 12.1875 5.25C12.1875 3.495 10.755 2.0625 9 2.0625Z"
      fill="black"
    />
    <path
      d="M15.4426 17.0625C15.1351 17.0625 14.8801 16.8075 14.8801 16.5C14.8801 13.9125 12.2401 11.8125 9.00011 11.8125C5.76011 11.8125 3.12012 13.9125 3.12012 16.5C3.12012 16.8075 2.86512 17.0625 2.55762 17.0625C2.25012 17.0625 1.99512 16.8075 1.99512 16.5C1.99512 13.2975 5.13761 10.6875 9.00011 10.6875C12.8626 10.6875 16.0051 13.2975 16.0051 16.5C16.0051 16.8075 15.7501 17.0625 15.4426 17.0625Z"
      fill="black"
    />
  </SvgSpecial>
);

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
  transition: all 0.5s ease-in;

  @media ${device.mobileS} {
    position: fixed;
    flex-direction: column;
    gap: 15px;
    opacity: 0;
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
  @media ${device.mobileS} {
    &:hover {
      background-size: 120%;
    }
  }

  @media ${device.laptop} {
    width: auto;
  }
`;

const ContainerLinkNavStyle = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in;
    margin-top: 5px;
  }
  &:visited {
    color: ${({ theme }) => theme.colors.mainColor};
  }

  &:visited:hover {
    color: ${({ theme }) => theme.colors.textButtonPayColor};
  }
  @media ${device.mobileS} {
    width: 105px;

    padding: 0 0 10px 0;

    &:hover::after {
      width: 100%;
      background: ${({ theme }) => theme.colors.secondColor};
    }
  }

  @media ${device.laptop} {
    align-items: center;

    padding: 10px 10px 5px 10px;
    width: auto;

    &:hover::after {
      width: 100%;
      background: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;

const LinkSpanNavStyle = styled.span`
  width: 100%;
  text-align: right;
  transition: all 0.4s ease-in;
`;
const LinkElement = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.colors.mainColor};

  @media ${device.mobileS} {
    justify-content: end;
    width: 100%;
  }
  @media ${device.laptop} {
    width: auto;
  }
`;
const ContainerSearchStyle = styled.div`
  border-radius: 5px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.2s ease-in;

  @media ${device.mobileS} {
    width: 24px;
    border: 0px solid ${({ theme }) => theme.colors.mainColor};
  }
  @media ${device.laptop} {
    width: 120px;
    padding: 7px 19px;
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
  }
`;
const InputSearchStyle = styled.input`
  border: none;
  outline: none;
  @media ${device.mobileS} {
    opacity: 0;
    width: 0px;
  }
  @media ${device.laptop} {
    opacity: 1;
    width: 84px;
  }
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

const IconCartStyle = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path
      d="M17.19 16.75H6.53999C5.54999 16.75 4.59999 16.33 3.92999 15.6C3.25999 14.87 2.92 13.89 3 12.9L3.83 2.94C3.86 2.63 3.74999 2.33001 3.53999 2.10001C3.32999 1.87001 3.04 1.75 2.73 1.75H1C0.59 1.75 0.25 1.41 0.25 1C0.25 0.59 0.59 0.25 1 0.25H2.74001C3.47001 0.25 4.15999 0.559996 4.64999 1.09C4.91999 1.39 5.12 1.74 5.23 2.13H17.72C18.73 2.13 19.66 2.53 20.34 3.25C21.01 3.98 21.35 4.93 21.27 5.94L20.73 13.44C20.62 15.27 19.02 16.75 17.19 16.75ZM5.28 3.62L4.5 13.02C4.45 13.6 4.64 14.15 5.03 14.58C5.42 15.01 5.95999 15.24 6.53999 15.24H17.19C18.23 15.24 19.17 14.36 19.25 13.32L19.79 5.82001C19.83 5.23001 19.64 4.67001 19.25 4.26001C18.86 3.84001 18.32 3.60999 17.73 3.60999H5.28V3.62Z"
      fill="#292D32"
    />
    <path
      d="M15.25 21.75C14.15 21.75 13.25 20.85 13.25 19.75C13.25 18.65 14.15 17.75 15.25 17.75C16.35 17.75 17.25 18.65 17.25 19.75C17.25 20.85 16.35 21.75 15.25 21.75ZM15.25 19.25C14.97 19.25 14.75 19.47 14.75 19.75C14.75 20.03 14.97 20.25 15.25 20.25C15.53 20.25 15.75 20.03 15.75 19.75C15.75 19.47 15.53 19.25 15.25 19.25Z"
      fill="#292D32"
    />
    <path
      d="M7.25 21.75C6.15 21.75 5.25 20.85 5.25 19.75C5.25 18.65 6.15 17.75 7.25 17.75C8.35 17.75 9.25 18.65 9.25 19.75C9.25 20.85 8.35 21.75 7.25 21.75ZM7.25 19.25C6.97 19.25 6.75 19.47 6.75 19.75C6.75 20.03 6.97 20.25 7.25 20.25C7.53 20.25 7.75 20.03 7.75 19.75C7.75 19.47 7.53 19.25 7.25 19.25Z"
      fill="#292D32"
    />
    <path
      d="M20 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H20C20.41 6.25 20.75 6.59 20.75 7C20.75 7.41 20.41 7.75 20 7.75Z"
      fill="#292D32"
    />
  </Svg>
);

const TitleCartStyle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const ContainerNumberProductsCartStyle = styled.div`
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

const NumberProductsCartStyle = styled.span`
  font-size: 9px;
`;

const ContainerIconCartStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 0;

  & path {
    @media ${device.mobileS} {
      fill: ${({ theme }) => theme.colors.secondColor};
    }
    @media ${device.laptop} {
      fill: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;

const ImageSocialStyle = styled.img`
  transition: filter 0.5s ease-in;

  @media ${device.mobileS} {
    filter: brightness(0) invert(1);
  }
  @media ${device.laptop} {
    filter: none;
  }
`;

export {
  IconCartStyle,
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
  ImageSocialStyle,
  IconLeanguageStyle,
  IconSignStyle,
  ContainerSearchIconStyle,
  LinkElement,
  ContainerLinkNavStyle,
};
