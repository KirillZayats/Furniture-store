import React from "react";
import { DownUpStyle, IconArrowUp } from "../styled/DownUpStyledComp";
const DownUp = () => {
  const upSite = () => {
    window.scrollTo(0, 0);
  };

  return (
    <DownUpStyle id="down-up" onClick={upSite}>
      <IconArrowUp id="icon-down-up" />
    </DownUpStyle>
  );
};

export default DownUp;
