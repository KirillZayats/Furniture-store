import React from "react";
import {
  SidebarActiveStyle,
  SidebarElementsstyle,
  SidebarElementStyle,
} from "../../styled/Header/SidebarActiveStyledComp";

const SidebarActive = () => {
  return (
    <SidebarActiveStyle htmlFor="checked">
      <SidebarElementsstyle htmlFor="checked">
        <SidebarElementStyle className="top-active" />
        <SidebarElementStyle className="bottom-active" />
      </SidebarElementsstyle>
    </SidebarActiveStyle>
  );
};

export default SidebarActive;
