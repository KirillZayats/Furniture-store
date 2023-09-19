import React, { useEffect } from 'react'
import ImageProduct from "../../resource/images/lamps.jpg"
import {
    ProductPayStyle,
    ImageProductStyle,
    TextProductStyle,
    ContainerTextStyle,
    ContainerMainTextStyle
  } from "../../styled/Pay/InfoPayStyledComp";
import { NAME_SITE_URL } from '../../Constants';

const ProductPay = ({product}) => {
  useEffect(() => {
    console.log(product);
  }, [])
  return (
    <ProductPayStyle>
        <ImageProductStyle src={`${NAME_SITE_URL}images/${product.category}/${product.image[0]}.png`}/>
        <ContainerTextStyle>
          <ContainerMainTextStyle>
          <TextProductStyle>{product.title}</TextProductStyle>
            <TextProductStyle>Count: {product.count}</TextProductStyle>
          </ContainerMainTextStyle>
            <TextProductStyle>${product.price * product.count}</TextProductStyle>
        </ContainerTextStyle>
    </ProductPayStyle>
  )
}

export default ProductPay