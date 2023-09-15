import { styled } from "styled-components";
import React from "react";
import IconArrow from "../resource/images/icons/Icon";

const Svg = styled(IconArrow)`
  width: 40px;
  height: 40px;
  fill: ${({ theme }) => theme.colors.secondColor};
`;

const IconArrowUp = ({ className }) => (
  <Svg viewBox="0 0 32 32" className={className}>
    <path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" />
  </Svg>
);

const DownUpStyle = styled.div`
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.buttonDownUpColor};
  bottom: -50px;
  right: 10px;
  opacity: 0;
  transition: all 0.3s ease-in;

  &:hover svg {
    fill: ${({ theme }) => theme.colors.buttonPayColor};
  }
`;

const DownUp = () => {

    const upSite = () => {
        window.scrollTo(0, 0);
    }

  return (
    <DownUpStyle id="down-up" onClick={upSite}>
      <IconArrowUp id="icon-down-up"/>
    </DownUpStyle>
  );
};

export default DownUp;
