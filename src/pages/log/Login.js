import React, { useEffect, useState } from "react";
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
  LinkRegistationOrSignStyle,
  ContainerInputsStyle,
} from "../../styled/Login/LoginStyledComp";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import {
  LOGIN_SUCCESS,
  NAME_EMAIL,
  NAME_SITE,
  REGISTER_SUCCESS,
} from "../../constants";
import { getCookie, setCookies } from "../../storage/cookie";

const Login = () => {
  const [modalActiveError, setModalActiveError] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  // const [isSuccessSignin, setIsSuccessSignin] = useState(false);
  const [message, setMessage] = useState("");
  const [textTypeLogin, setTextTypeLogin] = useState("Create account");
  const [isActivityBlockRepeat, setIsActivityBlockRepeat] = useState(false);
  const { user, loading, error } = useSelector((state) => state.user);
  const { logInEmail, logInGoogle, registerUser, logOut } = useAction();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  useEffect(() => {
    error != null && setModalActiveError(true);
  }, [error]);

  const onSubmit = (data) => {
    // reset();
    console.log(modalActive);
    if (data.repeat_password == undefined) {
      logInEmail(data.email_sign, data.password);
      setMessage(LOGIN_SUCCESS);
      setModalActive(true);

      document.getElementById("checkbox_forgot").checked
        ? setCookies(data.email_sign, true)
        : setCookies(data.email_sign);
    } else {
      registerUser(data.email_sign, data.password);
      setMessage(REGISTER_SUCCESS);
      setModalActive(true);
    }
  };

  const changeTypeLogin = () => {
    let fieldInputRepeatRegister = document.querySelector(
      "#input-repeat-password"
    );
    if (fieldInputRepeatRegister === null) {
      setTextTypeLogin("Sign in");
      setIsActivityBlockRepeat(true);
    } else {
      setTextTypeLogin("Create account");
      setIsActivityBlockRepeat(false);
    }
  };

  return (
    <MainStyle>
      <LoginStyle onSubmit={handleSubmit(onSubmit)}>
        <TitleLoginStyle>Sign in</TitleLoginStyle>
        <ContainerInputsStyle id="container-inputs">
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
          {isActivityBlockRepeat && (
            <ContainerInputStyle id="input-repeat-password">
              <LabelInputStyle>Repeat password</LabelInputStyle>
              <InputStyle
                type="password"
                {...register("repeat_password", {
                  required: "Repeat password required",
                  validate: (match) => {
                    const password = getValues("password");
                    return match === password || "Passwords should match!";
                  },
                })}
              />
              {errors.repeat_password && (
                <ErrorMessage message={errors.repeat_password.message} />
              )}
            </ContainerInputStyle>
          )}
        </ContainerInputsStyle>
        <ContainerCheckboxStyle>
          <CheckboxStyle type="checkbox" id="checkbox_forgot" />
          <TextCheckboxStyle>Forgot Password</TextCheckboxStyle>
        </ContainerCheckboxStyle>
        <LinkRegistationOrSignStyle onClick={changeTypeLogin}>
          {textTypeLogin}
        </LinkRegistationOrSignStyle>
        <ButtonLoginStyle className="button_dark">Sign in</ButtonLoginStyle>
      </LoginStyle>
      {modalActive && !error && !loading && (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          message={message}
          pathNameLink={`/${NAME_SITE}/`}
        />
      )}
      {error && (
        <Modal
          active={modalActiveError}
          setActive={setModalActiveError}
          message={error}
          pathNameLink={`/${NAME_SITE}/login`}
        />
      )}
    </MainStyle>
  );
};

export default Login;
