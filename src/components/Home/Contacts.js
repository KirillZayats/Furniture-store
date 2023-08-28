import React from "react";
import { BlockContentStyle } from "../../styled/AppStyledComp";
import {
  TextStyle,
  ArticleContainerStyle,
  TitleBlockStyle,
  ContainerListStyle
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
  InfoContactsStyle
} from "../../styled/Main/ContactsStyledComp";



const Contacts = () => {
  return (
    <BlockContentStyle>
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
        <FormStyle>
          <FormContainerInputStyle>
            <FormLabelStyle>Name</FormLabelStyle>
            <FormInputStyle></FormInputStyle>
          </FormContainerInputStyle>
          <FormContainerInputStyle>
            <FormLabelStyle>Email</FormLabelStyle>
            <FormInputStyle></FormInputStyle>
          </FormContainerInputStyle>
          <FormContainerInputStyle>
            <FormLabelStyle>Message</FormLabelStyle>
            <FormTextareaStyle placeholder="Type your message..."/>
          </FormContainerInputStyle>
          <FormSendStyle>Submit</FormSendStyle>
        </FormStyle>
      </ArticleContainerStyle>
    </BlockContentStyle>
  );
};

export default Contacts;
