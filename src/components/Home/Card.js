import React, { useEffect, useState } from "react";
import {
  CardButtonCartStyle,
  CardButtonDetailsStyle,
  CardCategoriesStyle,
  CardFigcaptionStyle,
  CardImageStyle,
  CardStyle,
  ContainerFigcaptionStyle,
  ContainerButtonStyle,
  LinkButtonStyle,
  ContainerInformationStyle,
} from "../../styled/Main/CardStyledComp";
import { NAME_SITE, NAME_SITE_URL } from "../../constants";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
const Card = ({ product }) => {
  const { getProduct, addProduct, deleteProduct, setStatusPay } = useAction();
  const [nameButton, setNameButton] = useState("Add to cart");
  const products = useSelector(state => state.cartProduct.productsCart);
  const { category } = useSelector(
    (state) => state.category
  );
  useEffect(() => {
    let isStatus = false;
    products.forEach(element => {
      if(product.id === element.id) {
        setNameButton("Delete from cart");
        isStatus = true;
      } else {
        !isStatus && setNameButton("Add to cart");
      }
    });
  }, [product])

  const addToCart = (e) => {
    if(nameButton === "Add to cart") {
      setNameButton("Delete from cart");
      addProduct(product);
      setStatusPay(products.length - 1);
    } else {
      setNameButton("Add to cart");
      deleteProduct(findIndexCart());
    }
  }

  const findIndexCart = () => {
    let indexProduct = 0;
    products.forEach((element, index) => {
      indexProduct = element.id === product.id ? index : indexProduct;
    })
    return indexProduct;
  } 

  return (
    <CardStyle className="block_product">
      <CardImageStyle
        src={`${product.image[0]}`}
      />
      <ContainerInformationStyle>
        <ContainerFigcaptionStyle>
          <CardFigcaptionStyle>{product.title}</CardFigcaptionStyle>
          <CardFigcaptionStyle className="price">
            ${Number(product.price).toFixed(1)}
          </CardFigcaptionStyle>
        </ContainerFigcaptionStyle>
        <CardCategoriesStyle>{product.category}</CardCategoriesStyle>
      </ContainerInformationStyle>
      <ContainerButtonStyle>
        <LinkButtonStyle to={`/${NAME_SITE}/products/details/${product.id}`}>
          <CardButtonDetailsStyle className="button_dark" onClick={() => getProduct(product.id)}>
            Details
          </CardButtonDetailsStyle>
        </LinkButtonStyle>
        <CardButtonCartStyle className="button_white" onClick={addToCart}>
          {nameButton}
        </CardButtonCartStyle>
      </ContainerButtonStyle>
    </CardStyle>
  );
};

export default Card;
