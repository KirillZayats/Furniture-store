import React from "react";
import { MainStyle } from "../styled/Main/MainStyledComp";
import InfoPay from "../components/Pay/InfoPay";
import FormPay from "../components/Pay/FormPay";
import { styled } from "styled-components";
import { device, size } from "../styled/Media/MediaQueryStyledComp";

const ContainerBlocksStyle = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Pay = () => {
  return (
    <MainStyle>
      <ContainerBlocksStyle>
        <InfoPay />
        <FormPay />
      </ContainerBlocksStyle>
    </MainStyle>
  );
};

export default Pay;
