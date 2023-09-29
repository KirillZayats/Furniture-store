import React from "react";
import { BlockContentStyle } from "../../styled/AppStyledComp";
import {
  TitleBlockStyle,
  PreTitleStyle,
  ArticleContainerStyle,
  BlockButtonsStyle,
  BlackButtonInfoStyle,
} from "../../styled/Main/MainStyledComp";
import {
  ContainerIndentStyle,
  SaleStyle,
} from "../../styled/Main/SaleStyledComp";
import {LinkButtonStyle} from "../../styled/Main/PartProductStyledComp"

const Sale = () => {
  return (
    <BlockContentStyle >
      <SaleStyle>
        <ArticleContainerStyle>
          <PreTitleStyle>Tagline</PreTitleStyle>
          <TitleBlockStyle>Sales Up to 50%</TitleBlockStyle>
          <ContainerIndentStyle>
            <BlockButtonsStyle>
            <LinkButtonStyle to={`/products`}>
            <BlackButtonInfoStyle className="button_special">
                Shop Now
              </BlackButtonInfoStyle>
              </LinkButtonStyle>

            </BlockButtonsStyle>
          </ContainerIndentStyle>
        </ArticleContainerStyle>
      </SaleStyle>
    </BlockContentStyle>
  );
};

export default Sale;
