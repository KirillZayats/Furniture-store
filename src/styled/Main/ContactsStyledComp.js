import { styled } from "styled-components";
import { device, size } from "../Media/MediaQueryStyledComp";

const ContainerInfoStyle = styled.div`
  @media ${device.mobileS} {
    margin: 0 auto 30px;
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} / 2 - 70px);
    margin: 0 0 30px;
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} / 2 - 80px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} / 2 - 60px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} / 2 - 100px);
  }
`;

const ArticleContainerStyle = styled.article`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
  }
  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 100px);
    flex-direction: row;
    justify-content: space-between;

  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 100px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 100px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 140px);
  }
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

  @media ${device.tablet} {
    width: calc(${size.tablet} / 2 - 70px);
  }
  @media ${device.tabletS} {
    width: calc(${size.tabletS} / 2 - 80px);
  }

  @media ${device.laptop} {
    width: calc(${size.laptop} / 2 - 60px);
  }

  @media ${device.desktop} {
    width: calc(${size.desktop} / 2 - 110px);
  }
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

  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100px;
  }
`;

const ContainerCheckboxStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const TextCheckboxStyle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const CheckboxStyle = styled.input`
  accent-color: ${({ theme }) => theme.colors.mainColor};
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
  InfoContactsStyle,
  ArticleContainerStyle,
  TextCheckboxStyle,
  ContainerCheckboxStyle,
  CheckboxStyle
};
