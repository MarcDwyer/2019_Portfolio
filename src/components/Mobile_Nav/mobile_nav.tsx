import React from "react";
import { createPortal } from "react-dom";
import { MobileNavbar, HamburgerMenu } from "../../styled-comps/nav-styles";

import "./mobile_nav.scss";

type Props = {
  toggler: () => void;
};
const MobileNav = ({ toggler }: Props) => {
  return createPortal(
    <MobileNavbar>
      <div className="burger-menu">
        <HamburgerMenu fontSize="36px" onClick={toggler} />
      </div>
    </MobileNavbar>,
    document.querySelector("#root")
  );
};

export default MobileNav;
