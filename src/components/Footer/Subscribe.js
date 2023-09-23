import React, { useState } from "react";
import { TitleBlockStyle } from "../../styled/Footer/FooterStyledComp";
import { WhiteButtonInfoStyle } from "../../styled/Main/MainStyledComp";
import { LinkUnderLineStyle } from "../../styled/AppStyledComp";
import {
  SubscribePolicyTextStyle,
  SubscribeStyle,
  SubscribeTextStyle,
  FormSubscribeStyle,
  InputPolicyStyle,
  ContainerInputPolicyStyle,
} from "../../styled/Footer/SubscribeStyledComp";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { MESSAGE_SUCCESS_SUBSCRIBE, NAME_SITE } from "../../Constants";
import Modal from "../Modal/Modal";

const Subscribe = () => {
  const [modalActive, setModalActive] = useState(false);
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setModalActive(true);
    setMessage(MESSAGE_SUCCESS_SUBSCRIBE(data.email_sub));
    reset();
  };

  return (
    <SubscribeStyle>
      <TitleBlockStyle>Subscribe</TitleBlockStyle>
      <SubscribeTextStyle>
        Join our newsletter to stay up to date on features and releases.
      </SubscribeTextStyle>
      <FormSubscribeStyle onSubmit={handleSubmit(onSubmit)}>
        <ContainerInputPolicyStyle>
          <InputPolicyStyle
            type="email"
            autoComplete="on"
            {...register("email_sub", {
              required: "Email required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                message: "Please enter a valid email",
              },
            })}
            placeholder="Enter your email"
          />
          {errors.email_sub && (
            <ErrorMessage message={errors.email_sub.message} />
          )}
        </ContainerInputPolicyStyle>

        <WhiteButtonInfoStyle className="button_white">
          Subscribe
        </WhiteButtonInfoStyle>
      </FormSubscribeStyle>
      <SubscribePolicyTextStyle>
        By subscribing you agree to with our{" "}
        <LinkUnderLineStyle>Privacy Policy</LinkUnderLineStyle> and provide
        consent to receive updates from our company.
      </SubscribePolicyTextStyle>
      <Modal active={modalActive} setActive={setModalActive} message={message} pathNameLink={`/${NAME_SITE}/`} />
    </SubscribeStyle>
  );
};

export default Subscribe;
