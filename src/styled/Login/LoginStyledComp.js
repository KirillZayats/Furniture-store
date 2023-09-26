import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";
import Icon from "../../resource/images/icons/Icon";

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

  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileL} {
    font-size: 20.565px;
  }
`;

const ButtonGoogleStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.colors.mainColor};
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
  transition: all 0.2s ease-in;
`;

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
`;
const IconGoogle = ({ className }) => (
  <Svg viewBox="0 0 48 48" className={className}>
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </Svg>
);

const ContainerLoginStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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
  ButtonGoogleStyle,
  IconGoogle,
  ContainerLoginStyle
};
