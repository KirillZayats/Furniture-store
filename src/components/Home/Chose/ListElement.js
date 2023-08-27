import React from "react";
import IconArroyRight from "../../../resource/images/icons/arroyRight.svg";
import {
  TextStyle,
  ContainerLinkStyle,
  IconArroyRightStyle
} from "../../../styled/Main/MainStyledComp";
import {
  TitleChoseContainerStyle,
  ContainerListElemChoseStyle,
  NumberListChoseStyle
} from "../../../styled/Main/ListChoseStyledComp";

import {  LinkStyle } from "../../../styled/AppStyledComp"

const ListElement = ({ id, title }) => {
  return (
    <ContainerListElemChoseStyle>
      <NumberListChoseStyle>{id}</NumberListChoseStyle>
      <TitleChoseContainerStyle>{title}</TitleChoseContainerStyle>
      <TextStyle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </TextStyle>
      <ContainerLinkStyle>
        <LinkStyle>Learn more</LinkStyle>
        <IconArroyRightStyle src={IconArroyRight} />
      </ContainerLinkStyle>
    </ContainerListElemChoseStyle>
  );
};

export default ListElement;
