import React, { useEffect, useState } from "react";
import {
  CardButtonCartStyle,
  CardButtonDetailsStyle,
  CardCategoriesStyle,
  CardFigcaptionStyle,
  CardStyle,
  ContainerFigcaptionStyle,
  ContainerButtonStyle,
  LinkButtonStyle,
  ContainerInformationStyle,
  ContainerImageStyle,
  ContainerLoader,
} from "../../styled/Main/CardStyledComp";
import { NAME_SITE } from "../../constants";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import { InfinitySpin } from "react-loader-spinner";

const Card = ({ product }) => {
  const { getProduct, addProduct, deleteProduct, setStatusPay } = useAction();
  const [nameButton, setNameButton] = useState("Add to cart");
  const products = useSelector((state) => state.cartProduct.productsCart);
  const [widthImage, setWidthImage] = useState(0);
  const [heihgtImage, setHeightImage] = useState(0);
  const [autoPlayDelay, setAutoPlayDelay] = useState(3);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, []);

  const handleWindowResize = () => {
    setHeightImage(getParametersSize(true));
    setWidthImage(getParametersSize(false));
  };

  useEffect(() => {
    let isStatus = false;
    products.forEach((element) => {
      if (product.id === element.id) {
        setNameButton("Delete from cart");
        isStatus = true;
      } else {
        !isStatus && setNameButton("Add to cart");
      }
    });
    setHeightImage(getParametersSize(true));
    setWidthImage(getParametersSize(false));

    if(product !== null) {
      let buttonClick0 = (document.getElementById(`product-${product.id}`)).querySelector('button[data-id=bullet-0]');
      if(buttonClick0 !== null) {
        buttonClick0.click()
      }
      let buttonClick1 = (document.getElementById(`product-${product.id}`)).querySelector('button[data-id=bullet-1]');
      if(buttonClick1 !== null) {
        buttonClick1.click()
      }
    }

  }, [product]);

  const addToCart = (e) => {
    if (nameButton === "Add to cart") {
      setNameButton("Delete from cart");
      addProduct(product);
      setStatusPay(products.length - 1);
    } else {
      setNameButton("Add to cart");
      deleteProduct(findIndexCart());
    }
  };

  const findIndexCart = () => {
    let indexProduct = 0;
    products.forEach((element, index) => {
      indexProduct = element.id === product.id ? index : indexProduct;
    });
    return indexProduct;
  };

  const getParametersSize = (status) => {
    let parameterWidth = 0;
    let parameterHeight = 0;
    if (window.innerWidth < 375) {
      parameterHeight = 300;
      parameterWidth = 300;
    } else if (window.innerWidth < 425) {
      parameterHeight = 300;
      parameterWidth = 355;
    } else if (window.innerWidth < 768) {
      parameterHeight = 300;
      parameterWidth = 375;
    } else if (window.innerWidth < 800) {
      parameterHeight = 300;
      parameterWidth = 314;
    } else if (window.innerWidth < 1024) {
      parameterHeight = 300;
      parameterWidth = 320;
    } else if (window.innerWidth < 1440) {
      parameterHeight = 200;
      parameterWidth = 216;
    } else {
      parameterHeight = 300;
      parameterWidth = 300;
    }
    return status ? parameterHeight : parameterWidth;
  };

  return (
    <CardStyle className="block_product" id={`product-${product.id}`}>
      <ContainerImageStyle>
        {product !== null && widthImage > 0 && heihgtImage > 0 ? (
          <SimpleImageSlider 
            width={widthImage}
            height={heihgtImage}
            images={product.image}
            slideDuration={0.7}
            showBullets={true}
            autoPlay={true}
            autoPlayDelay={autoPlayDelay}
          />
        ) : (
          <ContainerLoader>
            <InfinitySpin width="200" color="#000" />
          </ContainerLoader>
        )}
      </ContainerImageStyle>
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
          <CardButtonDetailsStyle
            className="button_dark"
            onClick={() => getProduct(product.id)}
          >
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
