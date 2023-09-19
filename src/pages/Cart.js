import React, { useState } from "react";
import { MainStyle, TitleBlockStyle } from "../styled/Main/MainStyledComp";
import {
  ContainerBackStyle,
  ContainerIconBackStyle,
  ContainerTotalPayStyle,
  LinkBackStyle,
  TextProductStyle,
  TextTotalPayStyle,
  IconArrowLeft,
  LinkParagrafStyle,
} from "../styled/Pay/InfoPayStyledComp";
import {
  InputSelectAllStyle,
  IconClearStyle,
  ContainerCartStyle,
  ContainerCheckboxStyle,
  ContainerPayInfoStyle,
  ContainerTitlePageStyle,
  ContainerMainBlockStyle,
  ButtonInPayStyle,
  ListProductsStyle,
  ContainerIconClearStyle,
  ContainerLinkPayStyle,
} from "../styled/Cart/CartStyledComp";
import ProductCart from "../components/Cart/ProductCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
import { NAME_SITE } from "../Constants";

const Cart = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cartProduct.productsCart);
  const allPrice = useSelector((state) => state.cartProduct.allPrice);

  const { deleteProduct, payProducts } = useAction();
  const [textButtonPay, setTextButtonPay] = useState("Select All"); 
  const selectAll = (e) => {
    const buttonPay = document.getElementById("idButtonPay");
    const containerPay = document.getElementById("containerLinkPay");

    const inputs = document
      .querySelector(".list_elements")
      .querySelectorAll("input");
    if (document.getElementById("inputSelectAll").checked) {
      inputs.forEach((element) => {
        element.checked = true;
      });
    } else {
      inputs.forEach((element) => {
        element.checked = false;
      });
    }
  };

  const clickPay = () => {
    // console.log(pricePay);
    payProducts(products);
  }

  const clearList = () => {
    let list = document.querySelector(".list_elements");
    for (let index = 0; index < list.childNodes.length; index++) {
      if (list.childNodes[index].querySelector("input").checked) {
        list.removeChild(list.childNodes[index]);
        console.log(products);
        deleteProduct(products[index].id);
        index--;
      }
    }
  };

  return (
    <MainStyle>
      <ContainerCartStyle>
        <ContainerMainBlockStyle>
          <ContainerTitlePageStyle>
            <LinkBackStyle
              to={`..`}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <ContainerBackStyle
                className="container_back"
                title="Click to back"
              >
                <ContainerIconBackStyle>
                  <IconArrowLeft />
                </ContainerIconBackStyle>
                <LinkParagrafStyle>Back</LinkParagrafStyle>
              </ContainerBackStyle>
            </LinkBackStyle>
            <TitleBlockStyle>Cart</TitleBlockStyle>
            <ContainerCheckboxStyle>
              <ContainerIconClearStyle
                id="container__icon-delete"
                onClick={clearList}
                alt="Icon to clear cart"
                title="Clear selected products"
              >
                <IconClearStyle />
              </ContainerIconClearStyle>
              <InputSelectAllStyle
                type="checkbox"
                id="inputSelectAll"
                onClick={selectAll}
              />
            </ContainerCheckboxStyle>
          </ContainerTitlePageStyle>
          <ListProductsStyle className="list_elements">
            {products.map((product, index) => (
              <ProductCart key={index} index={index} />
            ))}
          </ListProductsStyle>
          <ContainerTotalPayStyle>
            <TextTotalPayStyle>Total due:</TextTotalPayStyle>
            <TextTotalPayStyle>${Number(allPrice).toFixed(2)}</TextTotalPayStyle>
          </ContainerTotalPayStyle>
        </ContainerMainBlockStyle>
        <ContainerPayInfoStyle>
          <TextProductStyle>Select products to continue</TextProductStyle>{" "}
          <ContainerLinkPayStyle to={`pay`}>
            <ButtonInPayStyle
              className="button_rear button_dark"
              id="idButtonPay"
              onClick={clickPay}
            >
              {textButtonPay}
            </ButtonInPayStyle>
          </ContainerLinkPayStyle>
        </ContainerPayInfoStyle>
      </ContainerCartStyle>
    </MainStyle>
  );
};

export default Cart;
