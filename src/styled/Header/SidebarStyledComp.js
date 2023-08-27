import { styled } from "styled-components";

const SidebarStyle = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 4px;
`;

const SidebarElementsstyle = styled.div`
  width: 20px;
  height: 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 6px auto;
`;

const SidebarElementStyle = styled.div`
  width: 20px;
  height: 2px;
  background: ${({theme}) => theme.colors.rearColor};
`;

export { SidebarStyle, SidebarElementsstyle, SidebarElementStyle };
