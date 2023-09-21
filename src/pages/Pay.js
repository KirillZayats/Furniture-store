import React, { useState } from "react";
import { MainStyle } from "../styled/Main/MainStyledComp";
import InfoPay from "../components/Pay/InfoPay";
import FormPay from "../components/Pay/FormPay";
import { ContainerBlocksStyle } from "../styled/Pay/InfoPayStyledComp";
import Modal from "../components/Modal/Modal";

const Pay = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <MainStyle>
      <ContainerBlocksStyle>
        <InfoPay />
        <FormPay active={modalActive} setActive={setModalActive}/>
      </ContainerBlocksStyle>
    <Modal active={modalActive} setActive={setModalActive}/>
    </MainStyle>
  );
};

export default Pay;
