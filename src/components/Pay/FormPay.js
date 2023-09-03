import React from "react";
import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";
import IconButtonPay from "../../resource/images/icons/pay/apple_pay.svg";
import IconVisa from "../../resource/images/icons/pay/visa.svg";
import IconMaster from "../../resource/images/icons/pay/master_sard.svg";
import IconDiscover from "../../resource/images/icons/pay/discover.svg";
import IconAmex from "../../resource/images/icons/pay/amex.svg";
import IconNumberCard from "../../resource/images/icons/pay/number_card.svg";
import IconBackCard from "../../resource/images/icons/pay/back_card.svg";

const ContainerPayStyle = styled.form`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
    padding: 30px 0 0;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
  }
  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} / 2 - 50px);
    margin: 0 50px 0 0;

  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} / 2 - 50px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} / 2 - 50px);
    padding: 50px 0;

  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} / 2 - 70px);
    margin: 0 140px 0 0;
    padding: 80px 0;

  }
`;

const ButtonPayStyle = styled.button`
  width: 100%;
  height: 55px;
  background: ${({ theme }) => theme.colors.mainColor};
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
`;
const ButtonPayCardStyle = styled.button`
  width: 100%;
  height: 55px;
  background: ${({ theme }) => theme.colors.buttonPayColor};
  color: ${({ theme }) => theme.colors.textButtonPayColor};

  text-align: center;
  font-size: 20.565px;
  font-style: normal;
  font-weight: 500;
  line-height: 27.42px;

  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;

  margin: 35px auto;
`;
const ImgButtonPayStyle = styled.img``;
const ContainerTransitionStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.veryRearColor};
  margin: 30px auto;
`;
const LineTransitionStyle = styled.div`
  height: 1px;
  width: 29%;
  background: ${({ theme }) => theme.colors.lineTransitionPayColor};
`;
const TextTransitionStyle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const ContainerInputStyle = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LabelInputStyle = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.veryRearColor};
`;
const InputStyle = styled.input`
  width: auto;
  height: 25px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lineTransitionPayColor};
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 5px 0px rgba(0, 0, 0, 0.08);
  padding: 10px 13px;

  color: ${({ theme }) => theme.colors.veryRearColor};
  font-size: 15.995px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const ContainerSpecialInputsStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 91px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lineTransitionPayColor};
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 5px 0px rgba(0, 0, 0, 0.08);
  color: ${({ theme }) => theme.colors.veryRearColor};
`;

const ContainerBackSpecialInputsStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
`;

const ContainerInputNumberCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  margin: 10px 13px;
`;

const LineHorizontalStyle = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.lineTransitionPayColor};
`;

const LineVerticalStyle = styled.div`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.lineTransitionPayColor};
`;

const ContainerInputMonthCardStyle = styled.div`
  width: calc(50% - 1px);
  margin: 10px 13px;
  display: flex;
  align-items: center;
`;
const ContainerInputCVCCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 13px;
  align-items: center;
  width: calc(50% - 1px);
`;
const InputSpecialStyle = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 25px;
`;

const InputCVCSpecialStyle = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 25px;
`;

const ContainerImageCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;
const ImageCardStyle = styled.img`
  width: 26px;
  height: 17px;
`;

const ImageCardBackStyle = styled.div`
  width: 32px;
  height: 17px;
  background-repeat: no-repeat;
  background-image: url(${IconBackCard}), url(${IconNumberCard});
  background-position: left bottom, right top;
`;

const ContainerInputsStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;

  input::placeholder {
    font-style: normal;
    font-weight: 500;
    vertical-align: middle;
  }

  @media ${device.mobileS} {
    input::placeholder {
    font-size: 15px;
  }
  }

  @media ${device.mobileM} {
    input::placeholder {
    font-size: 18px;
  }  }
`;

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
          <InputStyle />
        </ContainerInputStyle>
        <ContainerInputStyle>
          <LabelInputStyle>Card details</LabelInputStyle>
          <ContainerSpecialInputsStyle>
            <ContainerInputNumberCardStyle>
              <InputSpecialStyle placeholder="1234 1234 1234 1234" />
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
                <InputCVCSpecialStyle placeholder="CVC" />
                <ImageCardBackStyle/>
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
