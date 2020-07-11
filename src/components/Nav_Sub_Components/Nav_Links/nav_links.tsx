import React from "react";
import { NavAppLink } from "./nav_link_styles";
import { useLocation } from "react-router";

import "./nav_link_styles.scss";
import { NewTheme } from "../../../themes";

const appLinks = [
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

type Props = {
  setToggle: (b: boolean) => void;
  toggle: boolean;
};
export default function NavLinks({ setToggle, toggle }: Props) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="main-app-links">
      {appLinks.map((link, i) => {
        return (
          <NavAppLink
            to={link.match}
            key={i}
            onClick={() => setToggle(false)}
            style={{
              color: pathname === link.match ? "white" : "",
            }}
          >
            <span>{link.header}</span>
          </NavAppLink>
        );
      })}
    </div>
  );
}
