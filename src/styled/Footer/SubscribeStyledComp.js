import { styled } from "styled-components";

const SubscribeStyle = styled.div`
  margin-bottom: 30px;
`;

const SubscribeTextStyle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const SubscribePolicyTextStyle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 15px;
`;

const InputPolicyStyle = styled.input`
  padding: 10px;
  height: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  margin-top: 20px;
  margin-bottom: 15px;
`;

const FormSubscribeStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

export {
  SubscribePolicyTextStyle,
  SubscribeStyle,
  SubscribeTextStyle,
  FormSubscribeStyle,
  InputPolicyStyle
};
