import React from "react";
import { useState } from "react";
import { MainStyle } from "../../styled/Main/MainStyledComp";
import { LinkUnderLineStyle } from "../../styled/AppStyledComp";
import PictureAvatar from "../../resource/images/lamps.jpg";
import {
  ButtonLogoutStyle,
  EmailStyle,
  NameStyle,
  ContainerInfoAccountStyle,
  ContainerLinkEditAvatar,
  PictureStyle,
  ContainerAvatarStyle,
  AccountStyle,
  LinkButtonStyle
} from "../../styled/Login/AccountStyledComp"
import { getCookie, setCookies, setValueLogout } from "../../storage/cookie";
import { IS_LOGGED, NAME, NAME_EMAIL, NAME_SITE, NICKNAME } from "../../constants";
const Account = () => {
    const [icon, setIcon] = useState(PictureAvatar);
    const [name, setName] = useState(getCookie(NAME));
    const [nickname, setNickName] = useState(getCookie(NICKNAME));
    const [email, setEmail] = useState(getCookie(NAME_EMAIL));
    let fileHandle;
    const editAvatar = async () => {
      try {
        [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        setIcon(URL.createObjectURL(file));
      } catch (error) {
        console.log(error);
      }
    }
    
    const logout = () => {
      setValueLogout();
    }

  return (
    <MainStyle>
      <AccountStyle>
        <ContainerAvatarStyle>
          <PictureStyle src={icon} id="pictureAvatar"/>
          <ContainerLinkEditAvatar>
            <LinkUnderLineStyle onClick={editAvatar} >Edit avatar</LinkUnderLineStyle>
          </ContainerLinkEditAvatar>
        </ContainerAvatarStyle>
        <ContainerInfoAccountStyle>
          <NameStyle>Name: {name != undefined ? name : "-"}</NameStyle>
          <NameStyle>Nickname: {nickname != undefined ? nickname : "-"}</NameStyle>
          <EmailStyle>Email: {email != undefined ? email : "-"}</EmailStyle>
          <LinkButtonStyle to={`/${NAME_SITE}/`}>
          <ButtonLogoutStyle className="button_dark" onClick={logout}>Logout</ButtonLogoutStyle>
          </LinkButtonStyle>
        </ContainerInfoAccountStyle>
      </AccountStyle>
    </MainStyle>
  );
};

export default Account;
