import React, { useEffect } from "react";
import {
  CardButtonCartStyle,
  CardButtonDetailsStyle,
  CardCategoriesStyle,
  CardFigcaptionStyle,
  CardImageStyle,
  CardStyle,
  ContainerFigcaptionStyle,
  ContainerButtonStyle,
  LinkButtonStyle,
  ContainerInformationStyle,
} from "../../styled/Main/CardStyledComp";
import ImageLamps from "../../resource/images/lamps.jpg";
import { NAME_SITE, NAME_SITE_URL } from "../../Constants";
import { useAction } from "../../hooks/useAction";
const Card = ({ product }) => {
  const { setProduct } = useAction();

  return (
    <CardStyle className="block_product">
      <CardImageStyle
        src={`${NAME_SITE_URL}images/${product.category}/${product.image[0]}.png`}
      />
      <ContainerInformationStyle>
        <ContainerFigcaptionStyle>
          <CardFigcaptionStyle>{product.title}</CardFigcaptionStyle>
          <CardFigcaptionStyle className="price">
            ${product.price}
          </CardFigcaptionStyle>
        </ContainerFigcaptionStyle>
        <CardCategoriesStyle>{product.category}</CardCategoriesStyle>
      </ContainerInformationStyle>
      <ContainerButtonStyle>
        <LinkButtonStyle to={`/${NAME_SITE}/details`}>
          <CardButtonDetailsStyle className="button_dark" onClick={() => setProduct(product)}>
            Details
          </CardButtonDetailsStyle>
        </LinkButtonStyle>
        <CardButtonCartStyle className="button_white">
          Add to cart
        </CardButtonCartStyle>
      </ContainerButtonStyle>
    </CardStyle>
  );
};

export default Card;
