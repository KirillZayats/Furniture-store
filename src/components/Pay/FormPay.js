import React from "react";
import IconButtonPay from "../../resource/images/icons/pay/apple_pay.svg";
import IconVisa from "../../resource/images/icons/pay/visa.svg";
import IconMaster from "../../resource/images/icons/pay/master_sard.svg";
import IconDiscover from "../../resource/images/icons/pay/discover.svg";
import IconAmex from "../../resource/images/icons/pay/amex.svg";
import {
  ContainerInputsStyle,
  ImageCardBackStyle,
  ImageCardStyle,
  ContainerImageCardStyle,
  InputCVCSpecialStyle,
  InputSpecialStyle,
  ContainerInputCVCCardStyle,
  ContainerInputMonthCardStyle,
  LineHorizontalStyle,
  LineVerticalStyle,
  ContainerInputNumberCardStyle,
  ContainerBackSpecialInputsStyle,
  ContainerSpecialInputsStyle,
  InputStyle,
  LabelInputStyle,
  ContainerInputStyle,
  TextTransitionStyle,
  LineTransitionStyle,
  ContainerTransitionStyle,
  ImgButtonPayStyle,
  ButtonPayCardStyle,
  ButtonPayStyle,
  ContainerPayStyle,
} from "../../styled/Pay/FormPayStyledComp";

const FormPay = () => {
  return (
    <ContainerPayStyle>
      <ButtonPayStyle>
        <ImgButtonPayStyle src={IconButtonPay} />
      </ButtonPayStyle>
      <ContainerTransitionStyle>
        <LineTransitionStyle />
        <TextTransitionStyle>Or pay with card</TextTransitionStyle>
        <LineTransitionStyle />
      </ContainerTransitionStyle>
      <ContainerInputsStyle>
        <ContainerInputStyle>
          <LabelInputStyle>Email</LabelInputStyle>
          <InputStyle type='email'/>
        </ContainerInputStyle>
        <ContainerInputStyle>
          <LabelInputStyle>Card details</LabelInputStyle>
          <ContainerSpecialInputsStyle>
            <ContainerInputNumberCardStyle>
              <InputSpecialStyle type="number" placeholder="1234 1234 1234 1234" />
              <ContainerImageCardStyle>
                <ImageCardStyle src={IconVisa} />
                <ImageCardStyle src={IconMaster} />
                <ImageCardStyle src={IconAmex} />
                <ImageCardStyle src={IconDiscover} />
              </ContainerImageCardStyle>
            </ContainerInputNumberCardStyle>
            <LineHorizontalStyle />
            <ContainerBackSpecialInputsStyle>
              <ContainerInputMonthCardStyle>
                <InputSpecialStyle placeholder="MM / YY" />
              </ContainerInputMonthCardStyle>
              <LineVerticalStyle />
              <ContainerInputCVCCardStyle>
                <InputCVCSpecialStyle type="number" placeholder="CVC" />
                <ImageCardBackStyle />
              </ContainerInputCVCCardStyle>
            </ContainerBackSpecialInputsStyle>
          </ContainerSpecialInputsStyle>
        </ContainerInputStyle>
        <ContainerInputStyle>
          <LabelInputStyle>Name on card</LabelInputStyle>
          <InputStyle />
        </ContainerInputStyle>{" "}
      </ContainerInputsStyle>
      <ButtonPayCardStyle>Pay $133.23</ButtonPayCardStyle>
    </ContainerPayStyle>
  );
};

export default FormPay;
