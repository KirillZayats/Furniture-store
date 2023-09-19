import React, {useEffect, useState} from "react";
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
  const {products} = useSelector((state) => state.payProducts);
  const [productsPay, setProductsPay] = useState([]);
  const [allPrice, selectAllPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    if(window.location.pathname.includes('details')) {
      setProductsPay(products);
      console.log(products[0]);
      price += products[0].price * products[0].count;
      selectAllPrice(price);
    } else {
      setProductsPay(products.filter((element) => element.statusPay && element))

      products.forEach(element => {
      price += element.statusPay ? element.price * element.count : 0
      });
      selectAllPrice(price);
    }
  }, [])

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
        
        {productsPay.map((elem, index) => (<ProductPay key={index} product={elem}/>))}
      </ListProductsStyle>
      <ContainerTotalPayStyle>
        <TextTotalPayStyle>Total due:</TextTotalPayStyle>
        <TextTotalPayStyle>${allPrice}</TextTotalPayStyle>
      </ContainerTotalPayStyle>
    </ContainerPayStyle>
  );
};

export default InfoPay;
