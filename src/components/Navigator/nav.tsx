import React, { useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router";

import MobileNav from "../Mobile_Nav/mobile_nav";
import Profile from "../Nav_Sub_Components/Profile/profile";
import NavLinks from "../Nav_Sub_Components/Nav_Links/nav_links";
import NavSocialLinks from "../Nav_Sub_Components/Nav_Social_Links/nav_social";

import { NavSegment } from "../../styled-comps/nav_sc";

import "./nav.scss";
import { NewTheme } from "../../themes";

const Nav = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggler = useCallback(() => setToggle(!toggle), [toggle]);

  const sprProps = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: {
      transform: "translateX(-100%)",
      opacity: 0,
    },
  });
  console.log(toggle);
  return (
    <animated.div
      className={`master-nav ${toggle ? "appear" : ""}`}
      style={{ ...sprProps, backgroundColor: NewTheme.navColor }}
    >
      <NavSegment>
        <MobileNav toggler={toggler} />
        <Profile />
        <NavLinks setToggle={setToggle} toggle={toggle} />
        <NavSocialLinks />
      </NavSegment>
    </animated.div>
  );
};

export default Nav;
