import React from "react";
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
import {NAME_SITE} from "../Constants"
import { useSelector } from "react-redux";
import { useAction } from "../hooks/useAction";
const Details = () => {
  const {count} = useSelector((state) => state.count);
  const { incrementCount, decrementCount} = useAction();

  return (
    <MainStyle>
      <ContainerDetailsStyle>
        <ContainerProductStyle>
          <TitleProductStyle>
            Divani Casa Kinsey - Modern Blue Fabric Modular Sectional Sofa
          </TitleProductStyle>
          <ContainerRatingStyle>
            <Rating
              name="half-rating-read"
              defaultValue={4.6}
              precision={0.1}
              readOnly
              size="large"
            />
            <ValueRatingStyle>4.6</ValueRatingStyle>
          </ContainerRatingStyle>
          <ImageProductStyle src={ImageProduct} />
          <DescriptionStyle>
            Update your living room with the Kinsey Sectional! This modern
            sectional sports a stylish navy blue polyester fabric that creates
            an elegant and cozy atmosphere. The Kinsey combines excellent
            quality materials and superb design that makes it the perfect
            communal piece for entertaining. The modular design offers
            moveability and creates options for your size needs.
          </DescriptionStyle>
          <ContainerPayStyle>
            <ContainerSettingForPayStyle>
              <ContainerArrowsStyle>
                <CountProductsStyle>Count:</CountProductsStyle>
                <ContainerArrowStyle onClick={() => decrementCount(count)}>
                  <ArrowStyle src={IconLeft} />
                </ContainerArrowStyle>
                <CountProductsStyle>{count}</CountProductsStyle>
                <ContainerArrowStyle onClick={() => incrementCount(count)}>
                  <ArrowStyle src={IconRight} />
                </ContainerArrowStyle>
              </ContainerArrowsStyle>
              <PriceStyle>Price: $3112.50</PriceStyle>
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
