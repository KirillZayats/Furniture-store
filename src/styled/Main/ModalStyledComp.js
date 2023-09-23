import { styled } from "styled-components";

const ModalStyle = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    &.active {
        transform: scale(1);
    }
`;

const ContainerModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 250px;
    padding: 20px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.secondColor};
    `;

const MessageTextStyle = styled.p`
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 150%;
`;
const ButtonStyle = styled.button`
    height: 40px;
    width: 100%;
    background: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.secondColor};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
`;

export {
    ButtonStyle,
    MessageTextStyle,
    ContainerModalStyle,
    ModalStyle
}