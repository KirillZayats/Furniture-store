import React from "react";
import { MainStyle, TitleBlockStyle } from "../styled/Main/MainStyledComp";
import {
  ContainerBackStyle,
  ContainerIconBackStyle,
  ContainerTotalPayStyle,
  LinkBackStyle,
  TextProductStyle,
  TextTotalPayStyle,
  IconArrowLeft,
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
} from "../styled/Cart/CartStyledComp";
import ProductCart from "../components/Cart/ProductCart";

const Cart = () => {
  const selectAll = () => {
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

  const clearList = () => {
    let list = document.querySelector(".list_elements");
    for (let index = 0; index < list.childNodes.length; index++) {
      if (list.childNodes[index].querySelector("input").checked) {
        list.removeChild(list.childNodes[index]);
        index--;
      }
    }
  };

  return (
    <MainStyle>
      <ContainerCartStyle>
        <ContainerMainBlockStyle>
          <ContainerTitlePageStyle>
            <ContainerBackStyle
              className="container_back"
              title="Click to back"
            >
              <ContainerIconBackStyle>
                <IconArrowLeft />
              </ContainerIconBackStyle>
              <LinkBackStyle>Back</LinkBackStyle>
            </ContainerBackStyle>
            <TitleBlockStyle>Cart</TitleBlockStyle>
            <ContainerCheckboxStyle>
              <ContainerIconClearStyle
                id="container__icon-delete"
                onClick={clearList}
                alt="Icon to clear cart"
                title="Clear selected products"
              >
                <IconClearStyle/>
              </ContainerIconClearStyle>
              <InputSelectAllStyle
                type="checkbox"
                id="inputSelectAll"
                onClick={selectAll}
              />
            </ContainerCheckboxStyle>
          </ContainerTitlePageStyle>
          <ListProductsStyle className="list_elements">
            <ProductCart id="1" />
            <ProductCart id="2" />
            <ProductCart id="3" />
          </ListProductsStyle>
          <ContainerTotalPayStyle>
            <TextTotalPayStyle>Total due:</TextTotalPayStyle>
            <TextTotalPayStyle>$133.23</TextTotalPayStyle>
          </ContainerTotalPayStyle>
        </ContainerMainBlockStyle>
        <ContainerPayInfoStyle>
          <TextProductStyle>Select products to continue</TextProductStyle>{" "}
          {/*при нажатии выделяется всё и функция кнопки меняется на преобрести(Checkout)*/}
          <ButtonInPayStyle className="button_rear button_dark">
            Select all
          </ButtonInPayStyle>
        </ContainerPayInfoStyle>
      </ContainerCartStyle>
    </MainStyle>
  );
};

export default Cart;
