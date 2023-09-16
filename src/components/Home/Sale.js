import React from "react";
import IconArroyRight from "../../resource/images/icons/arroyRight.svg";
import { BlockContentStyle } from "../../styled/AppStyledComp";
import {
  IconArroyRightStyle,
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
import { NAME_SITE } from "../../Constants";

const Sale = () => {
  return (
    <BlockContentStyle className={window.location.pathname == `/${NAME_SITE}/` ? "element-animation" : ""}>
      <SaleStyle>
        <ArticleContainerStyle>
          <PreTitleStyle>Tagline</PreTitleStyle>
          <TitleBlockStyle>Sales Up to 50%</TitleBlockStyle>
          <ContainerIndentStyle>
            <BlockButtonsStyle>
            <LinkButtonStyle to={`/${NAME_SITE}/products`}>
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
