import React from "react";
import { MainStyle } from "../styled/Main/MainStyledComp";
import InfoPay from "../components/Pay/InfoPay";
import FormPay from "../components/Pay/FormPay";
import { useLocation } from "react-router-dom";
import { ContainerBlocksStyle } from "../styled/Pay/InfoPayStyledComp";

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
