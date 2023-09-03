import React from 'react'
import ImageProduct from "../../resource/images/lamps.jpg"
import {
    ProductPayStyle,
    ImageProductStyle,
    TextProductStyle,
    ContainerTextStyle,
  } from "../../styled/Pay/InfoPayStyledComp";

const ProductPay = () => {
  return (
    <ProductPayStyle>
        <ImageProductStyle src={ImageProduct}/>
        <ContainerTextStyle>
            <TextProductStyle>Round Dining Table</TextProductStyle>
            <TextProductStyle>$65.00</TextProductStyle>
        </ContainerTextStyle>
    </ProductPayStyle>
  )
}

export default ProductPay