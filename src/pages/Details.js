import React, { useEffect, useState } from "react";
import { MainStyle } from "../styled/Main/MainStyledComp";
import ImageProduct from "../resource/images/lamps.jpg";
import IconLeft from "../resource/images/icons/setting/left.svg";
import IconRight from "../resource/images/icons/setting/right.svg";
import {
  ContainerButtonsStyle,
  ButtonPayStyle,
  ContainerPayStyle,
  ContainerSettingForPayStyle,
  PriceStyle,
  CountProductsStyle,
  ArrowStyle,
  ContainerArrowStyle,
  ContainerArrowsStyle,
  ValueRatingStyle,
  ContainerRatingStyle,
  ContainerDetailsStyle,
  DescriptionStyle,
  TitleProductStyle,
  ImageProductStyle,
  ContainerProductStyle,
  LinkPayStyle,
  ButtonAddCartStyle
} from "../styled/Main/DetailsStyledComp";
import { Rating } from "@mui/material";
import { NAME_SITE, NAME_SITE_URL } from "../Constants"
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
import { useParams } from "react-router-dom";
import { ContainerLoader } from "../styled/AppStyledComp";
import { InfinitySpin } from "react-loader-spinner";
const Details = () => {
  const [isLoadingData, setIsLoadingData] = useState(false)
  const params = useParams();
  const { value, limit } = useSelector((state) => state.count);
  const { product } = useSelector((state) => state.products);
  const { incrementCount, decrementCount, initLimit, getProduct, addProduct, deleteProduct } = useAction();
  const [nameButton, setNameButton] = useState("Add to cart");
  const products = useSelector(state => state.cartProduct.productsCart);

  useEffect(() => {
    products.forEach(element => {
      if(product.id === element.id) {
        setNameButton("Delete from cart")
      }
    });
  }, [])

  useEffect(() => {
    if ((product == null || product == undefined)) {
      getProduct(params.id)

    } else {
      setIsLoadingData(true);
      initLimit(product.limit)

    }
  }, [product])

  const addToCart = (e) => {
    if(nameButton === "Add to cart") {
      // e.target.innerText = "Delete from cart";
      setNameButton("Delete from cart");
      addProduct(product);
    } else {
      // e.target.innerText = "Add to cart";
      setNameButton("Add to cart");

      deleteProduct(product.id);
    }
  }

  return (
    <MainStyle>
      <ContainerDetailsStyle>
        {isLoadingData === true ?
          <ContainerProductStyle>
            <TitleProductStyle>
              {product.title}
            </TitleProductStyle>
            <ContainerRatingStyle>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.1}
                readOnly
                size="large"
              />
              <ValueRatingStyle>{product.rating.toFixed(1)}</ValueRatingStyle>
            </ContainerRatingStyle>
            <ImageProductStyle src={`${NAME_SITE_URL}images/${product.category}/${product.image[0]}.png`} />
            <DescriptionStyle>
              {product.description}
            </DescriptionStyle>
            <ContainerPayStyle>
              <ContainerSettingForPayStyle>
                <ContainerArrowsStyle>
                  <CountProductsStyle>Count:</CountProductsStyle>
                  <ContainerArrowStyle onClick={() => decrementCount(value)}>
                    <ArrowStyle src={IconLeft} />
                  </ContainerArrowStyle>
                  <CountProductsStyle>{value}</CountProductsStyle>
                  <ContainerArrowStyle onClick={() => incrementCount(value)}>
                    <ArrowStyle src={IconRight} />
                  </ContainerArrowStyle>
                </ContainerArrowsStyle>
                <PriceStyle>Price: ${product.price}</PriceStyle>
              </ContainerSettingForPayStyle>
              <ContainerButtonsStyle>
                <ButtonAddCartStyle  onClick={addToCart}>{nameButton}</ButtonAddCartStyle>
                <LinkPayStyle to={`/${NAME_SITE}/pay`}>
                  <ButtonPayStyle>Pay now</ButtonPayStyle>
                </LinkPayStyle>
              </ContainerButtonsStyle>
            </ContainerPayStyle>
          </ContainerProductStyle>
          :
          product == undefined ? <h1>Товара с таким уникальным номером не существует!!!</h1> :
            <ContainerLoader>
              <InfinitySpin width="200" color="#000" />
            </ContainerLoader>
        }
      </ContainerDetailsStyle>
    </MainStyle>
  );
};

export default Details;
