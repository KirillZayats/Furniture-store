import React from 'react'
import {
    ProductPayStyle,
    ImageProductStyle,
    TextProductStyle,
    ContainerTextStyle,
    ContainerMainTextStyle
  } from "../../styled/Pay/InfoPayStyledComp";

const ProductPay = ({product}) => {

  return (
    <ProductPayStyle>
        <ImageProductStyle src={`${product.image[0]}`}/>
        <ContainerTextStyle>
          <ContainerMainTextStyle>
          <TextProductStyle>{product.title}</TextProductStyle>
            <TextProductStyle>Count: {product.count}</TextProductStyle>
          </ContainerMainTextStyle>
            <TextProductStyle>${Number(product.price * product.count).toFixed(2)}</TextProductStyle>
        </ContainerTextStyle>
    </ProductPayStyle>
  )
}

export default ProductPay