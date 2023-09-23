import React, { useEffect, useState } from "react";
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
import { NAME_SITE } from "../constants";
import Modal from "../components/Modal/Modal";

const Cart = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cartProduct.productsCart);
  const allPrice = useSelector((state) => state.cartProduct.allPrice);

  const { deleteProduct, payProducts, setStatusPay } = useAction();
  const [textButtonPay, setTextButtonPay] = useState("Select All"); 

  useEffect(() => {
    if(products.length === products.filter((element) => element.statusPay).length && products.length > 0) {
      document.getElementById("inputSelectAll").checked = true
      setTextButtonPay("Checkout")
    }
    const inputs = document
    .querySelector(".list_elements")
    .querySelectorAll("input");
    inputs.forEach((element) => {
      if(element.checked) {
        setTextButtonPay("Checkout")
      }
    });
  }, [])

  const selectAll = () => {
    const inputs = document
      .querySelector(".list_elements")
      .querySelectorAll("input");
    if(inputs.length === 0) {
      document.getElementById("inputSelectAll").checked = false
    }
    if (document.getElementById("inputSelectAll").checked) {
      inputs.forEach((element) => {
        element.checked = true;
      });
      products.forEach((element, index) => {
        if(!element.statusPay) {
          setStatusPay(index);
        }
      });
      setTextButtonPay("Checkout")
    } else {
      inputs.forEach((element) => {
        element.checked = false;
      });
      products.forEach((element, index) => {
        if(element.statusPay) {
          setStatusPay(index);
        }
      });
      setTextButtonPay("Select All")
    }
  };

  const clickPay = (e) => {
    if(textButtonPay === "Select All") {
      if(products.length > 0) {
        setTextButtonPay("Checkout")
      document.getElementById("inputSelectAll").checked = true;
      selectAll();
      }
      e.preventDefault();
    } else {
      payProducts(products);
    }
  }

  const clearList = () => {
    let list = document.querySelector(".list_elements");
    for (let index = 0; index < list.childNodes.length; index++) {
      list.childNodes[index].querySelector("input").checked = false; 
    }
    for (let index = 0; index < products.length; index++) {
      console.log(products);
      if (products[index].statusPay) {
        deleteProduct(index)
        index--;
      }
    }
    setTextButtonPay("Select All");
    document.getElementById("inputSelectAll").checked = false;
  };

  const clickCheckBox = (e) => {
    let isCheck = false;
    let lengthCheckedInputs = 0;
    const inputs = document
    .querySelector(".list_elements")
    .querySelectorAll("input");
    inputs.forEach(element => {
      if(element.checked) {
        setTextButtonPay("Checkout");
        isCheck = true;
        lengthCheckedInputs++;
      } else {
        document.getElementById("inputSelectAll").checked = false;
      } 
    });
    !isCheck && setTextButtonPay("Select All");
    document.getElementById("inputSelectAll").checked = inputs.length === lengthCheckedInputs ? true : false
  }

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
          <ListProductsStyle className="list_elements" onClick={clickCheckBox}>
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
      <Modal active={modalActive} setActive={setModalActive} message={message} pathNameLink={`/${NAME_SITE}/login`} />

    </MainStyle>
  );
};

export default Cart;
