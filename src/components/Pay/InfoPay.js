import React from "react";
import {
  ContainerPayStyle,
  ListProductsStyle,
  TextTotalPayStyle,
  ContainerTotalPayStyle,
  LinkBackStyle,
  ContainerIconBackStyle,
  ContainerBackStyle,
  IconArrowLeft,
  LinkParagrafStyle,
} from "../../styled/Pay/InfoPayStyledComp";
import IconArroyBack from "../../resource/images/icons/arroy_left.svg";
import ProductPay from "./ProductPay";
import { useNavigate } from "react-router-dom";

const InfoPay = () => {
  const navigate = useNavigate();

  return (
    <ContainerPayStyle>
      <LinkBackStyle
        to={`..`}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <ContainerBackStyle className="container_back" title="Click to back">
          <ContainerIconBackStyle>
            <IconArrowLeft />
          </ContainerIconBackStyle>
          <LinkParagrafStyle>Back</LinkParagrafStyle>
        </ContainerBackStyle>
      </LinkBackStyle>
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
