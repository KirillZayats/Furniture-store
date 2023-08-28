import { styled } from "styled-components";
const ContainerInfoStyle = styled.div`
  margin-bottom: 30px;
`;

const ContainerContactStyle = styled.li`
  display: flex;
  gap: 16px;
`;

const IconStyle = styled.img``;
const InfoContactsStyle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormLabelStyle = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const FormContainerInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const FormInputStyle = styled.input`
  height: 15px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  padding: 10px;
  font-size: 14px;
`;

const FormTextareaStyle = styled.textarea`
  height: 130px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  padding: 10px;
  font-size: 14px;
  resize: none;
`;

const FormSendStyle = styled.button`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.secondColor};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
`;

export {
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
};
