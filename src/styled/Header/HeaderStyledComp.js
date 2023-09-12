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
  transition: 0.4s ease-in;
  text-align: center;
  left: 10px;
`;

const ContainerSocialStyle = styled.div`
  height: 24px;
  display: flex;
  gap: 12px;
  left: -145px;
  bottom: 50px;
  transition: 0.4s ease-in;

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
    transition: 0.4s ease-in;
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
    transition: all 0.4s ease-in;
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
  /* margin-top: 4px; */
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

export {
  HeaderContentStyle,
  LineStyle,
  TopLineStyle,
  SearchStyle,
  SearchIconStyle,
  HeaderBlockStyle,
  ChangePlaceStyle,
  ContainerContactsBarMenuStyle,
  ContainerSocialStyle,
};
