import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";

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
  height: 18px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};

  @media ${device.mobileS} {
    margin-top: 20px;
    margin-bottom: 15px;
  }

  @media ${device.tablet} {
    margin-top: 0px;
    margin-bottom: 0px;  
    width: calc(${size.tablet} / 2);

    }
`;

const FormSubscribeStyle = styled.form`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
  }
`;

export {
  SubscribePolicyTextStyle,
  SubscribeStyle,
  SubscribeTextStyle,
  FormSubscribeStyle,
  InputPolicyStyle
};
