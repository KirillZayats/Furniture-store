import React, { useEffect, useState } from "react";
import { MainStyle, ContainerErrorStyle, TextErrorStyle } from "../styled/Main/MainStyledComp";
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
import {
  ContainerBlocksStyle,
  LinkBackStyle,
  ContainerIconBackStyle,
  ContainerBackStyle,
  IconArrowLeft,
  LinkParagrafStyle,
} from "../styled/Pay/InfoPayStyledComp";
import { Rating } from "@mui/material";
import { IS_LOGGED, MESSAGE_ERROR_ID, MESSAGE_NO_LOGIN, NAME_SITE, NAME_SITE_URL } from "../constants"
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerLoader } from "../styled/AppStyledComp";
import { InfinitySpin } from "react-loader-spinner";
import Modal from "../components/Modal/Modal";
import { getCookie } from "../storage/cookie";
const Details = () => {
  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoadingData, setIsLoadingData] = useState(false)
  const params = useParams();
  const { value, limit } = useSelector((state) => state.count);
  const { product } = useSelector((state) => state.products);
  const { incrementCount, decrementCount, initLimit, getProduct, addProduct, deleteProduct, payProducts } = useAction();
  const [nameButton, setNameButton] = useState("Add to cart");
  const products = useSelector(state => state.cartProduct.productsCart);

  useEffect(() => {
    products.forEach(element => {
      if (product.id === element.id) {
        setNameButton("Delete from cart")
      }
    });
  }, [])

  useEffect(() => {
    console.log(product);

    if ((product == null || product == undefined)) {
      getProduct(params.id)

    } else {
      setIsLoadingData(true);
      initLimit(product.limit)
    }
  }, [product])

  const addToCart = (e) => {
    if (nameButton === "Add to cart") {
      // e.target.innerText = "Delete from cart";
      setNameButton("Delete from cart");
      addProduct(product, value);
    } else {
      // e.target.innerText = "Add to cart";
      setNameButton("Add to cart");

      deleteProduct(product.id);
    }
  }

  const clickPay = (e) => {
    if(getCookie(IS_LOGGED) === "true") {
      payProducts(product, value);
    }
    else {
      setModalActive(true);
      setMessage(MESSAGE_NO_LOGIN);
      e.preventDefault();
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
            <ImageProductStyle src={`${product.image[0]}`} />
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
                <PriceStyle>Price: ${Number(product.price * value).toFixed(2)}</PriceStyle>
              </ContainerSettingForPayStyle>
              <ContainerButtonsStyle>
                <ButtonAddCartStyle onClick={addToCart}>{nameButton}</ButtonAddCartStyle>
                <LinkPayStyle to={`pay`}>
                  <ButtonPayStyle onClick={clickPay}>Pay now</ButtonPayStyle>
                </LinkPayStyle>
              </ContainerButtonsStyle>
            </ContainerPayStyle>
          </ContainerProductStyle>
          :
          product == undefined ?
            <ContainerErrorStyle>
              <TextErrorStyle>{MESSAGE_ERROR_ID}</TextErrorStyle>
              <LinkBackStyle
                to={`..`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                <ContainerBackStyle className="container_back" title="Click to back">
                  <ContainerIconBackStyle>
                    <IconArrowLeft />
                  </ContainerIconBackStyle>
                  <LinkParagrafStyle>Back</LinkParagrafStyle>
                </ContainerBackStyle>
              </LinkBackStyle>
            </ContainerErrorStyle>
            :
            <ContainerLoader>
              <InfinitySpin width="200" color="#000" />
            </ContainerLoader>
        }
      </ContainerDetailsStyle>
      <Modal active={modalActive} setActive={setModalActive} message={message} pathNameLink={`/${NAME_SITE}/login`} /> 
    </MainStyle>
  );
};

export default Details;
