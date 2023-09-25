import React from "react";
import {
  ContainerLinkStyle,
  IconArroyRightStyle
} from "../../../styled/Main/MainStyledComp";
import {
  TitleChoseContainerStyle,
  ContainerListElemChoseStyle,
  NumberListChoseStyle,
  TextChoseListStyle
} from "../../../styled/Main/ChoseUs/ListChoseStyledComp";
import {  LinkStyle } from "../../../styled/AppStyledComp"

const ListElement = ({ id, title }) => {
  return (
    <ContainerListElemChoseStyle>
      <NumberListChoseStyle>{id}</NumberListChoseStyle>
      <TitleChoseContainerStyle>{title}</TitleChoseContainerStyle>
      <TextChoseListStyle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </TextChoseListStyle>
      <ContainerLinkStyle className="block__link_hover">
        <LinkStyle>Learn more</LinkStyle>
        <IconArroyRightStyle/>
      </ContainerLinkStyle>
    </ContainerListElemChoseStyle>
  );
};

export default ListElement;
