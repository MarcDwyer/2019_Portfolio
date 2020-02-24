import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router";

import "./nav.scss";

interface Props {
  clicked: boolean;
  setClicked: Function;
}

const links = [
  {
    header: "Home",
    match: "/"
  },
  {
    header: "Projects",
    match: "/projects"
  },
  {
    header: "Work",
    match: "/work"
  },
  {
    header: "Contact",
    match: "/contact"
  }
];
const Nav = (props: Props) => {
  const isMobile = window.innerWidth < 1000;
  const { pathname } = useLocation();

  const contactPath = "/contact";

  const sprProps = useSpring({
    opacity: 1,
    reverse: !props.clicked && isMobile,
    transform: "translateX(0%)",
    from: {
      opacity: pathname ? 1 : 0,
      transform: pathname ? "translateX(0%)" : "translateX(-100%)"
    }
  });
  const { x, fontSize } = useSpring({
    x: pathname === contactPath && !isMobile ? 1 : 0,
    fontSize: pathname === contactPath && !isMobile ? 50 : 42,
    config: { duration: 1000 },
    from: { x: 0, fontSize: 42 }
  });
  return (
    <div className={`master-nav ${props.clicked ? "appear" : ""}`}>
      <animated.div className={`animated-nav ${pathname}-nav`} style={sprProps}>
        <div className="subDiv">
          <div className="inner-con">
            <img
              src="https://s3.us-east-2.amazonaws.com/fetchappbucket/port/me.jpg"
              alt="me"
            />
            <div className="inner-text">
              <h1>Marc Dwyer</h1>
              <h3>Web Developer</h3>
            </div>
            <div className="app-links">
              {links.map(({ header, match }, i) => {
                return (
                  <Link
                    style={
                      pathname === match
                        ? { color: "rgba(255, 255, 255, 1)" }
                        : {}
                    }
                    key={i}
                    to={match}
                    onClick={() => props.setClicked(false)}
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
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                      })
                      .interpolate(x => `scale(${x})`),
                    fontSize: fontSize.interpolate({
                      range: [33, 35, 37, 40, 44],
                      output: [33, 36, 40, 44, 54]
                    })
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
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                      })
                      .interpolate(x => `scale(${x})`),
                    fontSize: fontSize.interpolate({
                      range: [33, 35, 37, 40],
                      output: [33, 36, 40, 44]
                    })
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Nav;
