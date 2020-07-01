import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router";

import MobileNav from "../Mobile_Nav/mobile_nav";

import "./nav.scss";
import { ThemeConsumer } from "styled-components";
import { DefaultTheme } from "../../themes";

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

const images = {
  yinYang:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Yin_and_yang.svg/1024px-Yin_and_yang.svg.png",
  myImg: "https://i.imgur.com/F4iPL1v.png",
};
const Nav = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [img, setImg] = useState<string>(images.myImg);
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
    <div
      className={`master-nav ${toggle ? "appear" : ""}`}
    >
      <MobileNav toggler={toggler} />
      <div className={`animated-nav ${pathname}-nav`} style={{ ...sprProps }}>
        <div className="subDiv">
          <div className="inner-con">
            <img src={img} alt="me" />
            <div className="inner-text">
              <h1>Marc Dwyer</h1>
              <h3>Web Developer</h3>
            </div>
            <div className="app-links">
              {links.map(({ header, match }, i) => {
                return (
                  <Link
                    style={pathname === match
                      ? { color: "rgba(255, 255, 255, 1)" }
                      : {}}
                    key={i}
                    to={match}
                    onClick={() => {
                      if (toggle) {
                        setToggle(false);
                      }
                    }}
                    className="linker"
                  >
                    {header}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="links">
            <div
              className={`sublinks ${pathname === "/contact" ? "glow" : ""}`}
            >
              <div className="center-this">
                <animated.a
                  href="https://github.com/MarcDwyer?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fa fa-github"
                  style={{
                    //@ts-ignore
                    opacity: x.interpolate({ output: [0.8, 1] }),
                    transform: x
                      .interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                      })
                      .interpolate((x) => `scale(${x})`),
                    fontSize: fontSize.interpolate({
                      range: [33, 35, 37, 40, 44],
                      output: [33, 36, 40, 44, 54],
                    }),
                  }}
                />
                <animated.a
                  href="https://www.linkedin.com/in/marc-dwyer-53087339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fa fa-linkedin"
                  style={{
                    //@ts-ignore
                    opacity: x.interpolate({ output: [0.7, 1] }),
                    transform: x
                      .interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                      })
                      .interpolate((x) => `scale(${x})`),
                    fontSize: fontSize.interpolate({
                      range: [33, 35, 37, 40],
                      output: [33, 36, 40, 44],
                    }),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
