import React from "react";
import { MainStyle } from "../../styled/Main/MainStyledComp";
import {
  TextCheckboxStyle,
  ContainerCheckboxStyle,
  ContainerInputStyle,
  CheckboxStyle,
  ButtonLoginStyle,
  TitleLoginStyle,
  InputStyle,
  LabelInputStyle,
  LoginStyle,
} from "../../styled/Login/LoginStyledComp";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <MainStyle>
      <LoginStyle onSubmit={handleSubmit(onSubmit)}>
        <TitleLoginStyle>Sign in</TitleLoginStyle>
        <ContainerInputStyle>
          <LabelInputStyle>Email</LabelInputStyle>
          <InputStyle
            type="email"
            autoComplete="on"
            {...register("email_sign", {
              required: "Email required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email_sign && (
            <ErrorMessage message={errors.email_sign.message} />
          )}
        </ContainerInputStyle>
        <ContainerInputStyle>
          <LabelInputStyle>Password</LabelInputStyle>
          <InputStyle
            type="password"
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
              maxLength: {
                value: 30,
                message: "Password cannot exceed more than 30 characters",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage message={errors.password.message} />
          )}
        </ContainerInputStyle>
        <ContainerCheckboxStyle>
          <CheckboxStyle type="checkbox" name="checkbox_forgot" />
          <TextCheckboxStyle>Forgot Password</TextCheckboxStyle>
        </ContainerCheckboxStyle>
        <ButtonLoginStyle className="button_dark">Sign in</ButtonLoginStyle>
      </LoginStyle>
    </MainStyle>
  );
};

export default Login;
