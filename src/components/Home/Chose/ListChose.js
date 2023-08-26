import React, { useState } from "react";
import {
  ContainerListChoseStyle,
} from "../../../styled/Main/ListChoseStyledComp";
import ListElement from "./ListElement";


const ListChose = () => {
  const listValue= [
    {title: "Affordable Prices"},
    {title:"Free Shipping"},
    {title:"Best Quality"},
    {title:"Money Back Guaranty"},
  ];
  return (
    <ContainerListChoseStyle>
         {listValue.map((item, i) => (
            <ListElement key={i} id={i+1} title={item.title} />
          ))}
    </ContainerListChoseStyle>
  );
};

export default ListChose;
