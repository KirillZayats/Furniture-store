import React, { useEffect, useState } from "react";
import ImageProduct from "../../resource/images/lamps.jpg";
import IconLeft from "../../resource/images/icons/setting/left.svg";
import IconRight from "../../resource/images/icons/setting/right.svg";
import {
  ImageProductStyle,
  CheckboxStyle,
  ProductPayStyle,
  ContainerTextStyle,
  PriceProductStyle,
  TextProductStyle,
  CountProductsStyle,
  ArrowStyle,
  ContainerArrowStyle,
  ContainerArrowsStyle,
} from "../../styled/Cart/ProductCartStyledComp";
import { NAME_SITE_URL } from "../../Constants";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";

const ProductCart = ({index}) => {
  const products = useSelector(state => state.cartProduct.productsCart);
  const [count, setCount] = useState(1)
  const { incrementCountProduct, decrementCountProduct } = useAction();

  const clickIncrementCountProduct = () => {
    incrementCountProduct(index)
    if(count < products[index].limit) {
      setCount(count + 1)
    }
  }

  const clickDecrementCountProduct = () => {
    decrementCountProduct(index)
    if(count > 1) {
      setCount(count - 1)
    }
  }
  return (
    <ProductPayStyle>
      <ImageProductStyle
        src={`${NAME_SITE_URL}images/${products[index].category}/${products[index].image[0]}.png`}
        alt="image product"
        title="Image product"
      />
      <ContainerTextStyle>
        <TextProductStyle>
          {products[index].title}
        </TextProductStyle>
        <PriceProductStyle>${products[index].price}</PriceProductStyle>
        <ContainerArrowsStyle>
          <CountProductsStyle>Count:</CountProductsStyle>
          <ContainerArrowStyle onClick={clickDecrementCountProduct}>
            <ArrowStyle src={IconLeft} alt="Icon left" />
          </ContainerArrowStyle>
          <CountProductsStyle>{count}</CountProductsStyle>
          <ContainerArrowStyle onClick={clickIncrementCountProduct}>
            <ArrowStyle src={IconRight} alt="Icon right" />
          </ContainerArrowStyle>
        </ContainerArrowsStyle>
      </ContainerTextStyle>
      <CheckboxStyle type="checkbox" id={products[index].id} />
    </ProductPayStyle>
  );
};

export default ProductCart;
