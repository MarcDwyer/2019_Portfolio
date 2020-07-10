import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router";

import MobileNav from "../Mobile_Nav/mobile_nav";
import Profile from "../Nav_Sub_Components/Profile/profile";

import { Segment, InnerSegment } from "../../styled-comps/containers";

import "./nav.scss";
import { NewTheme } from "../../themes";

const links = [
  {
    header: "Home",
    match: "/",
  },
  {
    header: "Projects",
    match: "/projects",
  },
  {
    header: "Work",
    match: "/work",
  },
  {
    header: "Contact",
    match: "/contact",
  },
];

const socialLinks = [
  {
    name: "github",
    cName: "fa fa-github",
    href: "https://github.com/MarcDwyer?tab=repositories",
  },
  {
    name: "linkedIn",
    cName: "fa fa-linkedin",
    href: "https://www.linkedin.com/in/marc-dwyer-53087339/",
  },
];

const Nav = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { pathname } = useLocation();

  const toggler = useCallback(() => setToggle(!toggle), [toggle]);
  const contactPath = "/contact";

  const sprProps = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: {
      transform: "translateX(-100%)",
      opacity: 0,
    },
  });
  const { x, fontSize } = useSpring({
    x: pathname === contactPath && !toggle ? 1 : 0,
    fontSize: pathname === contactPath && !toggle ? 50 : 42,
    config: { duration: 1000 },
    from: { x: 0, fontSize: 42 },
  });

  return (
    <div className="master-nav" style={{ backgroundColor: NewTheme.navColor }}>
      <Segment>
        <InnerSegment>
          <Profile />
        </InnerSegment>
      </Segment>
      <Segment>
      </Segment>
    </div>
  );
};

export default Nav;
