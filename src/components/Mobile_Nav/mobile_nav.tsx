import React from "react";
import { createPortal } from "react-dom";
import {
  MobileNavbar,
  HamburgerMenu,
} from "../../styled-comps/mobile_nav_styles";

import "./mobile_nav.scss";
import { NewTheme } from "../../themes";

type Props = {
  toggler: () => void;
};
const MobileNav = ({ toggler }: Props) => {
  return createPortal(
    <MobileNavbar>
      <div className="burger-menu">
        <HamburgerMenu
          color={NewTheme.btnColor}
          fontSize="36px"
          onClick={toggler}
        />
      </div>
    </MobileNavbar>,
    document.querySelector("#root"),
  );
};

export default MobileNav;
