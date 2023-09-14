import React from "react";
import {
  SidebarStyle,
  SidebarElementsstyle,
  SidebarElementStyle,
} from "../../styled/Header/SidebarStyledComp";

const Sidebar = () => {
  return (
    <SidebarStyle htmlFor="checked" id="sidebar">
      <SidebarElementsstyle htmlFor="checked">
        <SidebarElementStyle className="top" />
        <SidebarElementStyle className="middle" />
        <SidebarElementStyle className="bottom" />
      </SidebarElementsstyle>
    </SidebarStyle>
  );
};

export default Sidebar;
