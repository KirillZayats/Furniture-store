import React, { useEffect } from "react";
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
import {NAME_SITE, NAME_SITE_URL} from "../Constants"
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
const Details = () => {
  const {value, limit} = useSelector((state) => state.count);

  const { incrementCount, decrementCount, initLimit} = useAction();
  const {product} = useSelector((state) => state.product);

  useEffect(() => {
    initLimit(product.count)
    console.log(limit);
  }, [product])

  return (
    <MainStyle>
      <ContainerDetailsStyle>
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
              <ButtonAddCartStyle>Add to cart</ButtonAddCartStyle>
              <LinkPayStyle to={`/${NAME_SITE}/pay`}>
                <ButtonPayStyle>Pay now</ButtonPayStyle>
              </LinkPayStyle>
            </ContainerButtonsStyle>
          </ContainerPayStyle>
        </ContainerProductStyle>
      </ContainerDetailsStyle>
    </MainStyle>
  );
};

export default Details;
