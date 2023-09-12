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
  AccountStyle
} from "../../styled/Login/AccountStyledComp"
const Account = () => {
    const [icon, setIcon] = useState(PictureAvatar);
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
          <NameStyle>Name: Kirill</NameStyle>
          <NameStyle>Nickname: zayakiri</NameStyle>
          <EmailStyle>Email: kirill.zayats.99@mail.ru</EmailStyle>
          
          <ButtonLogoutStyle className="button_dark">Logout</ButtonLogoutStyle>
        </ContainerInfoAccountStyle>
      </AccountStyle>
    </MainStyle>
  );
};

export default Account;
