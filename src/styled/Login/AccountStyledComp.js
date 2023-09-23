import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";
import { Link } from "react-router-dom";

const AccountStyle = styled.div`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 0;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
  }
  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 100px);
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 100px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 100px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 140px);
    padding: 55px 0;
  }
`;

const ContainerAvatarStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 200px;
  }
`;

const PictureStyle = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
`;
const ContainerLinkEditAvatar = styled.div`
  margin: 0 auto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const ContainerInfoAccountStyle = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${device.tablet} {
    justify-content: center;
  }
`;
const NameStyle = styled.p`

`;
const EmailStyle = styled.p``;
const ButtonLogoutStyle = styled.button`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.secondColor};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
`;

const LinkButtonStyle = styled(Link)`
`;

export {
    ButtonLogoutStyle,
    EmailStyle,
    NameStyle,
    ContainerInfoAccountStyle,
    ContainerLinkEditAvatar,
    PictureStyle,
    ContainerAvatarStyle,
    AccountStyle,
    LinkButtonStyle
}