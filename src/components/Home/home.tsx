import React from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import Particles from "react-particles-js";
import { Params } from "../../data/data";
import "./home.scss";

const Home = (props: RouteComponentProps) => {
  const iProps = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(150%)" }
  });

  const LinkDiv = useSpring({
    transform: "rotate(0)",
    from: { transform: "rotate(65deg)" }
  });
  return (
    <div className="master home">
      <Particles style={{ backgroundColor: "#eee" }} params={Params} />
      <animated.div className="welcome" style={iProps}>
        <div className="home-header">
          <span className="first-header">MARC DWYER</span>
          <span>Full-Stack Developer</span>
        </div>
        <Link className="home-projects" to="/projects">
          View Projects
        </Link>
      </animated.div>
      <animated.i className="fa fa-arrow-left" style={LinkDiv} />
    </div>
  );
};

export default Home;
