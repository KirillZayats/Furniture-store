import { styled } from "styled-components";
import { device, size } from "../Media/MediaQueryStyledComp";
import { SidebarStyle } from "./SidebarStyledComp";
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
  transition: all .5s ease-in;
  text-align: center;
  left: 10px;
`;

const ContainerSocialStyle = styled.div`
  height: 24px;
  display: flex;
  gap: 12px;
  left: -145px;
  bottom: 50px;
  transition: all .5s ease-in;

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

  .top {
    transform: rotate(0deg);
  }

  input[type="checkbox"]:checked ~ ${SidebarStyle} .middle {
    opacity: 0;
  }

  input[type="checkbox"]:checked ~ ${SidebarStyle} .top {
    background: ${({ theme }) => theme.colors.secondColor};

    transform: rotate(45deg);
    top: -10px;
  }

  input[type="checkbox"]:checked ~ ${SidebarStyle} .bottom {
    transform: rotate(-45deg);
    background: ${({ theme }) => theme.colors.secondColor};
    top: -20px;
  }

  input[type="checkbox"]:checked ~ ${SidebarStyle} {
    position: fixed;
    transition: all .5s ease-in;
    left: 130px;
    top: 20px;
  }

  input[type="checkbox"]:checked ~ ul {
    opacity: 1;
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.secondColor};
    height: 100%;
    padding: 60px 30px 0px 30px;
    left: 0px;
    transition: all .5s ease-in;
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

const SearchIconStyle = styled.img`
  cursor: pointer;
`;

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
  transition: all .5s ease-in;

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
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    transition: all .3s ease-in;

    margin-top: 5px;
  }
  @media ${device.mobileS} {
    width: 105px;
    padding: 0 0 10px 0;
    &:hover {
      background-size: 120%;
    }
    &:hover::after {
      width: 100%;
      background: ${({ theme }) => theme.colors.secondColor};
    }
  }

  @media ${device.laptop} {
    align-items: center;
    width: auto;
    padding: 10px 10px 5px 10px;
    &:hover::after {
      width: 100%;
      background: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
const LinkNavStyle = styled.a`
  width: 100%;
  text-align: right;
  transition: all .4s ease-in;

`;
const ContainerSearchStyle = styled.div`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  padding: 7px 19px;
  height: 24px;
  display: flex;
  flex-direction: row;
  width: 120px;
  justify-content: space-between;
`;
const InputSearchStyle = styled.input`
  width: 84px;
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
`;

const ImageSocialStyle = styled.img`
    transition: filter .5s ease-in;

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
  ImageSocialStyle
};
