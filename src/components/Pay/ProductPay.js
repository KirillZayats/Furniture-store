import React, { useEffect } from 'react'
import ImageProduct from "../../resource/images/lamps.jpg"
import {
    ProductPayStyle,
    ImageProductStyle,
    TextProductStyle,
    ContainerTextStyle,
    ContainerMainTextStyle
  } from "../../styled/Pay/InfoPayStyledComp";
import { NAME_SITE_URL } from '../../constants';

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