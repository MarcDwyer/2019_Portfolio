import React, { useCallback, useState } from "react";

import MobileNav from "../Mobile_Nav/mobile_nav";
import Profile from "../Nav_Sub_Components/Profile/profile";
import NavLinks from "../Nav_Sub_Components/Nav_Links/nav_links";
import NavSocialLinks from "../Nav_Sub_Components/Nav_Social_Links/nav_social";

import { NavSegment } from "../../styled-comps/nav_sc";

import "./nav.scss";
import { observer } from "mobx-react-lite";
import { ThemeStore } from "../../store/theme_store";
import { FaMoon, FaSun, FaToggleOff, FaToggleOn } from "react-icons/fa";
type Props = {
  ts: ThemeStore;
};
const Nav = observer(({ ts }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggler = useCallback(() => setToggle(!toggle), [toggle]);

  const ThemeChanger = () => {
    return (
      <div className="theme-changer">
        {ts.isDark && (
          <>
            <FaMoon className="sunMoon" />
            <FaToggleOn />
          </>
        )}
        {!ts.isDark && (
          <>
            <FaSun className="sunMoon" />
            <FaToggleOff />
          </>
        )}
      </div>
    );
  };
  return (
    <div
      className={`master-nav ${toggle ? "appear" : ""}`}
      style={{
        backgroundColor: ts.theme.bgColor,
        color: ts.theme.color,
      }}
    >
      <NavSegment>
      <div className="theme-toggler" onClick={() => ts.changeTheme()}>
        {ThemeChanger()}
      </div>
        <MobileNav toggler={toggler} />
        <Profile theme={ts.theme} />
        <NavLinks theme={ts.theme} setToggle={setToggle} toggle={toggle} />
        <NavSocialLinks />
      </NavSegment>
    </div>
  );
});

export default Nav;
