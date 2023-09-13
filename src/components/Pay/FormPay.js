import React, { useState } from "react";
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
  IconApplePay,
} from "../../styled/Pay/FormPayStyledComp";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";

const FormPay = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [pastValueDate, setPastValueDate] = useState("");

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  const addSymbolForDate = (e) => {
    let valueInput = e.target.value;
    if (valueInput.length == 2 && pastValueDate < 3) valueInput += "/";
    if (pastValueDate.length == 4 && valueInput.length == 3) {
      valueInput = valueInput.split("");
      valueInput.length = valueInput.length - 1;
      valueInput = valueInput.join("");
    }
    if (valueInput.length == 3 && pastValueDate.length == 2) {
      let lastValue = valueInput[valueInput.length - 1];
      valueInput = valueInput.split("");
      valueInput[valueInput.length - 1] = "/";
      valueInput.push(lastValue);
      valueInput = valueInput.join("");
    }
    setPastValueDate(valueInput);
    e.target.value = valueInput;
  };

  return (
    <ContainerPayStyle onSubmit={handleSubmit(onSubmit)}>
        <ButtonPayStyle href="https://www.apple.com/apple-pay/" target="_blank"
          className="button_dark"
          disabled={true}
        >
          <IconApplePay className="icon__button" />
        </ButtonPayStyle>
      <ContainerTransitionStyle>
        <LineTransitionStyle />
        <TextTransitionStyle>Or pay with card</TextTransitionStyle>
        <LineTransitionStyle />
      </ContainerTransitionStyle>
      <ContainerInputsStyle>
        <ContainerInputStyle>
          <LabelInputStyle>Email</LabelInputStyle>
          <InputStyle
            type="email"
            autoComplete="on"
            {...register("email_cart", {
              required: "Email required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email_cart && (
            <ErrorMessage message={errors.email_cart.message} />
          )}
        </ContainerInputStyle>
        <ContainerInputStyle>
          <LabelInputStyle>Card details</LabelInputStyle>
          <ContainerSpecialInputsStyle className="inputs_card">
            <ContainerInputNumberCardStyle>
              <InputSpecialStyle
                autoComplete="on"
                {...register("number_card", {
                  required: "Number card required",
                  pattern: {
                    value: /^(\d{4}([-]|)\d{4}([-]|)\d{4}([-]|)\d{4})$/i,
                    message: "Please enter a valid number card",
                  },
                })}
                placeholder="1234 1234 1234 1234"
              />
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
                <InputSpecialStyle
                  autoComplete="on"
                  {...register("date_cart", {
                    required: "MM/YY required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/(2[3-9]|3[0-9])$/i,
                      message:
                        "Please you must enter the month and year in the format (mm/yy). Month from 01 to 12. Year from 23 to 39",
                    },
                  })}
                  placeholder="MM / YY"
                  onKeyUp={addSymbolForDate}
                />
              </ContainerInputMonthCardStyle>
              <LineVerticalStyle />
              <ContainerInputCVCCardStyle>
                <InputCVCSpecialStyle
                  type="number"
                  placeholder="CVC"
                  {...register("cvc", {
                    required: "CVC required",
                    pattern: {
                      value: /^[0-9]{3}$/i,
                      message:
                        "Please you must enter the three numbers that are on the back of the card",
                    },
                  })}
                />
                <ImageCardBackStyle />
              </ContainerInputCVCCardStyle>
            </ContainerBackSpecialInputsStyle>
          </ContainerSpecialInputsStyle>
          {errors.number_card && (
            <ErrorMessage message={errors.number_card.message} />
          )}
          {errors.date_cart && (
            <ErrorMessage message={errors.date_cart.message} />
          )}
          {errors.cvc && <ErrorMessage message={errors.cvc.message} />}
        </ContainerInputStyle>
        <ContainerInputStyle>
          <LabelInputStyle>Name on card</LabelInputStyle>
          <InputStyle
            type="text"
            autoComplete="on"
            {...register("name", {
              required: "Name required",
              pattern: {
                value: /^[A-Z][A-Z]+ [A-Z][A-Z]+$/i,
                message: "Please you must enter your first and last name",
              },
            })}
          />
          {errors.name && <ErrorMessage message={errors.name.message} />}
        </ContainerInputStyle>
      </ContainerInputsStyle>
      <ButtonPayCardStyle className="button_dark">
        Pay $133.23
      </ButtonPayCardStyle>
    </ContainerPayStyle>
  );
};

export default FormPay;
