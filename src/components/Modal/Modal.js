import React, { useEffect } from 'react'
import { LinkButtonStyle } from "../../styled/Pay/FormPayStyledComp";
import {
    ButtonStyle,
    MessageTextStyle,
    ContainerModalStyle,
    ModalStyle
} from "../../styled/Main/ModalStyledComp"

const Modal = ({ active, setActive, message, pathNameLink }) => {
    return (
        <ModalStyle className={active && "active"} onClick={() => setActive(false)}>
            <ContainerModalStyle onClick={(e) => {
                e.stopPropagation();
            }}>
                <MessageTextStyle>
                    {message}
                </MessageTextStyle>
                <LinkButtonStyle to={pathNameLink}>
                    <ButtonStyle onClick={() => { setActive(false) }}>
                        OK
                    </ButtonStyle>
                </LinkButtonStyle>
            </ContainerModalStyle>

        </ModalStyle>
    )
}

export default Modal
