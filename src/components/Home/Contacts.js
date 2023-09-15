import React from "react";
import {
  BlockContentStyle,
  LinkUnderLineStyle,
} from "../../styled/AppStyledComp";
import {
  TextStyle,
  TitleBlockStyle,
  ContainerListStyle,
} from "../../styled/Main/MainStyledComp";
import IconEmail from "../../resource/images/icons/constacts/Email.svg";
import IconPhone from "../../resource/images/icons/constacts/Phone.svg";
import IconAdress from "../../resource/images/icons/constacts/Pin.svg";
import {
  FormContainerInputStyle,
  FormInputStyle,
  FormLabelStyle,
  FormSendStyle,
  FormStyle,
  FormTextareaStyle,
  IconStyle,
  ContainerContactStyle,
  ContainerInfoStyle,
  InfoContactsStyle,
  ArticleContainerStyle,
  TextCheckboxStyle,
  ContainerCheckboxStyle,
  CheckboxStyle,
} from "../../styled/Main/ContactsStyledComp";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { nameSite } from "../../Constants";

const Contacts = () => {
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
    <BlockContentStyle className={window.location.pathname == `/${nameSite}/` ? "element-animation" : ""}>
      <ArticleContainerStyle>
        <ContainerInfoStyle>
          <TitleBlockStyle>Contact Us</TitleBlockStyle>
          <TextStyle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TextStyle>
          <ContainerListStyle>
            <ContainerContactStyle>
              <IconStyle src={IconEmail}></IconStyle>
              <InfoContactsStyle>hello@relume.io</InfoContactsStyle>
            </ContainerContactStyle>
            <ContainerContactStyle>
              <IconStyle src={IconPhone}></IconStyle>
              <InfoContactsStyle>+1 (555) 000-0000</InfoContactsStyle>
            </ContainerContactStyle>
            <ContainerContactStyle>
              <IconStyle src={IconAdress}></IconStyle>
              <InfoContactsStyle>
                123 Sample St, Sydney NSW 2000 AU
              </InfoContactsStyle>
            </ContainerContactStyle>
          </ContainerListStyle>
        </ContainerInfoStyle>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <FormContainerInputStyle>
            <FormLabelStyle htmlFor="name_client">Name</FormLabelStyle>
            <FormInputStyle
              type="text"
              autoComplete="on"
              id="name_client"
              {...register("first_name", {
                required: "Name required",
                pattern: {
                  value: /^[A-Z]{2,40}$/i,
                  message: "Name must have 2 or more letters",
                },
              })}
            />
            {errors.first_name && (
              <ErrorMessage message={errors.first_name.message} />
            )}
          </FormContainerInputStyle>
          <FormContainerInputStyle>
            <FormLabelStyle htmlFor="email_client_id">Email</FormLabelStyle>
            <FormInputStyle
              type="email"
              autoComplete="on"
              id="email_client_id"
              {...register("email_client", {
                required: "Email required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email_client && (
              <ErrorMessage message={errors.email_client.message} />
            )}
          </FormContainerInputStyle>
          <FormContainerInputStyle>
            <FormLabelStyle htmlFor="message_client_id">Message</FormLabelStyle>
            <FormTextareaStyle
              type="text"
              id="message_client_id"
              {...register("message_client", {
                required: "Message required",
                minLength: {
                  value: 10,
                  message: "Message must have 10 or more symbols",
                },
              })}
              placeholder="Type your message..."
            />
            {errors.message_client && (
              <ErrorMessage message={errors.message_client.message} />
            )}
          </FormContainerInputStyle>
          <ContainerCheckboxStyle>
            <CheckboxStyle
              type="checkbox"
              {...register("checkbox_agree", {
                required: "Checkbox required", 
              })}
            />
            <TextCheckboxStyle>
              I accept the <LinkUnderLineStyle>Terms</LinkUnderLineStyle>
            </TextCheckboxStyle>
            {errors.checkbox_agree && (
            <ErrorMessage message={errors.checkbox_agree.message} />
          )}
          </ContainerCheckboxStyle>
          <FormSendStyle className="button_dark">Submit</FormSendStyle>
        </FormStyle>
      </ArticleContainerStyle>
    </BlockContentStyle>
  );
};

export default Contacts;
