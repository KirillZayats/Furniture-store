import React from "react";
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

const ProductCart = () => {
  return (
    <ProductPayStyle>
      <ImageProductStyle
        src={ImageProduct}
        alt="image product"
        title="Image product"
      />
      <ContainerTextStyle>
        <TextProductStyle>
          Divani Casa Kinsey - Modern Blue Fabric Modular Sectional Sofa
        </TextProductStyle>
        <PriceProductStyle>$65.00</PriceProductStyle>
        <ContainerArrowsStyle>
          <CountProductsStyle>Count:</CountProductsStyle>
          <ContainerArrowStyle>
            <ArrowStyle src={IconLeft} alt="Icon left" />
          </ContainerArrowStyle>
          <CountProductsStyle>3</CountProductsStyle>
          <ContainerArrowStyle>
            <ArrowStyle src={IconRight} alt="Icon right" />
          </ContainerArrowStyle>
        </ContainerArrowsStyle>
      </ContainerTextStyle>
      <CheckboxStyle type="checkbox" />
    </ProductPayStyle>
  );
};

export default ProductCart;
