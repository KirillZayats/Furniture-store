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
  CardImageStyle
} from "../../styled/Main/CardStyledComp";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Card = ({ product }) => {
  const { getProduct, addProduct, deleteProduct, setStatusPay } = useAction();
  const [nameButton, setNameButton] = useState("Add to cart");
  const products = useSelector((state) => state.cartProduct.productsCart);
  const [widthImage, setWidthImage] = useState(0);
  const [heihgtImage, setHeightImage] = useState(0);
  const [autoPlayDelay, setAutoPlayDelay] = useState(3);
  useEffect(() => {
  }, []);

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

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' "> </span>';
    },
  };

  return (
    <CardStyle className="block_product" id={`product-${product.id}`}>
      <ContainerImageStyle>
        {product !== null ? (
                          <Swiper
                          pagination={pagination}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          modules={[Pagination, Autoplay]}
                            className="mySwiper"
                          >
                            <SwiperSlide>  
                              <CardImageStyle src={`${product.image[0]}`} />
                            </SwiperSlide>
                            <SwiperSlide>   
                              <CardImageStyle src={`${product.image[1]}`} />
                            </SwiperSlide>
                          </Swiper>
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
        <LinkButtonStyle to={`/products/details/${product.id}`}>
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
