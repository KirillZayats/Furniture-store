import { styled } from "styled-components";

const SidebarActiveStyle = styled.label`
  width: 24px;
  height: 24px;
  margin-top: 4px;
  z-index: 999;
  left: -50px;
  top:10px;
  position: fixed;
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
  z-index: 999;
`;

const SidebarElementStyle = styled.span`
  display: block;
  position: relative;
  transition: 0.3s ease-in;
  width: 20px;
  height: 2px;
  background: ${({ theme }) => theme.colors.secondColor};
  &.top-active {
    transform: rotate(45deg);
    top: 5px;
    
  }
  &.bottom-active {
    transform: rotate(-45deg);
    top: 0px;

  }
`;

export {
  SidebarActiveStyle,
  SidebarElementsstyle,
  SidebarElementStyle,
};
