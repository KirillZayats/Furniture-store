import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";

const LoginStyle = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
    gap: 20px;
    padding: 30px 0;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
  }
  @media ${device.desktop} {
    padding: 55px 0;
  }
`;

const ContainerInputStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContainerInputsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LabelInputStyle = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.mainColor};
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

const TitleLoginStyle = styled.h3`
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const ButtonLoginStyle = styled.button`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.secondColor};

  text-align: center;
  font-size: 20.565px;
  font-style: normal;
  font-weight: 500;
  line-height: 27.42px;

  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;

  margin: 0px auto;
`;

const CheckboxStyle = styled.input`
  accent-color: ${({ theme }) => theme.colors.mainColor};
`;
const ContainerCheckboxStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const LinkRegistationOrSignStyle = styled.a`
  display: block;
  width: 50%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  margin: 0 auto;
  transition: all 0.2s;
  text-decoration: underline;
`;

const TextCheckboxStyle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export {
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
};
