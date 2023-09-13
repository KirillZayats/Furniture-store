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
  ButtonTextStyle,
  ButtonModStyle,
  ContainerIndentStyle,
  ArroyChangeColor,
  SaleStyle,
} from "../../styled/Main/SaleStyledComp";

const Sale = () => {
  return (
    <BlockContentStyle>
      <SaleStyle>
        <ArticleContainerStyle>
          <PreTitleStyle>Tagline</PreTitleStyle>
          <TitleBlockStyle>Sales Up to 50%</TitleBlockStyle>
          <ContainerIndentStyle>
            <BlockButtonsStyle>
              <BlackButtonInfoStyle className="button_special">Shop Now</BlackButtonInfoStyle>
              <ButtonModStyle>
                <ButtonTextStyle>Button</ButtonTextStyle>
                <ArroyChangeColor>
                  <IconArroyRightStyle src={IconArroyRight} />
                </ArroyChangeColor>
              </ButtonModStyle>
            </BlockButtonsStyle>
          </ContainerIndentStyle>
        </ArticleContainerStyle>
      </SaleStyle>
    </BlockContentStyle>
  );
};

export default Sale;
