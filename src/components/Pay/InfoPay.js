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
import { useSelector } from "react-redux";
import ProductPay from "./ProductPay";
import { useNavigate } from "react-router-dom";

const InfoPay = () => {
  const navigate = useNavigate();
  const {products, pricePay} = useSelector((state) => state.payProducts);
  
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
        {products.map((elem, index) => (<ProductPay key={index} product={elem}/>))}
      </ListProductsStyle>
      <ContainerTotalPayStyle>
        <TextTotalPayStyle>Total due:</TextTotalPayStyle>
        <TextTotalPayStyle>${Number(pricePay).toFixed(2)}</TextTotalPayStyle>
      </ContainerTotalPayStyle>
    </ContainerPayStyle>
  );
};

export default InfoPay;
