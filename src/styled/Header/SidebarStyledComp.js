import { styled } from "styled-components";

const SidebarStyle = styled.label`
  display: block;
  width: 24px;
  height: 24px;
  margin-top: 4px;
  z-index: 999;
  top: 0px;
  cursor: pointer;
  transition: all .5s ease-in;
`;

const SidebarElementsstyle = styled.label`
  width: 20px;
  height: 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 6px auto;
  cursor: pointer;

`;

const InputCheckBoxStyle = styled.input`
  display: none;
`;

const SidebarElementStyle = styled.span`
  display: block;
  position: relative;
  transition: 0.3s ease-in;
  left: 0px;
  top: 0px;
  width: 20px;
  height: 2px;
  background: ${({ theme }) => theme.colors.rearColor};
  opacity: 1;
  
`;

export {
  SidebarStyle,
  SidebarElementsstyle,
  SidebarElementStyle,
  InputCheckBoxStyle,
};
