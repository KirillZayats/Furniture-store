import React from "react";
import {
  ContainerPayStyle,
  ListProductsStyle,
  TextTotalPayStyle,
  ContainerTotalPayStyle,
  LinkBackStyle,
  IconBackStyle,
  ContainerIconBackStyle,
  ContainerBackStyle,
  IconArrowLeft
} from "../../styled/Pay/InfoPayStyledComp";
import IconArroyBack from "../../resource/images/icons/arroy_left.svg";
import ProductPay from "./ProductPay";

const InfoPay = () => {
  return (
    <ContainerPayStyle>
      <ContainerBackStyle className="container_back">
        <ContainerIconBackStyle>
          <IconArrowLeft/>
        </ContainerIconBackStyle>
        <LinkBackStyle>Back</LinkBackStyle>
      </ContainerBackStyle>
      <ListProductsStyle>
        <ProductPay />
        <ProductPay />
        <ProductPay />
      </ListProductsStyle>
      <ContainerTotalPayStyle>
        <TextTotalPayStyle>Total due:</TextTotalPayStyle>
        <TextTotalPayStyle>$133.23</TextTotalPayStyle>
      </ContainerTotalPayStyle>
    </ContainerPayStyle>
  );
};

export default InfoPay;
