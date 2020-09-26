import React from "react";
import { useSpring } from "react-spring";

// import Particles from "react-particles-js";
// import { Params } from "../../particle_data";
import { NewTheme } from "../../themes";

import { ProjectHomeBtn } from "../../styled-comps/buttons";

import "./home.scss";

const Home = () => {
  const iProps = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(150%)" },
  });

  // const LinkDiv = useSpring({
  //   transform: "rotate(0)",
  //   from: { transform: "rotate(65deg)" },
  // });
  return (
    <div
      className="master home"
      style={{ backgroundColor: NewTheme.navColor }}
    >
      <div className="welcome" style={iProps}>
        <div className="home-header">
          <span className="first-header">MARC DWYER</span>
          <span>Full-Stack Developer</span>
        </div>
        <ProjectHomeBtn
          className="home-projects"
          to="/projects"
        >
          View Projects
        </ProjectHomeBtn>
      </div>
      {/* <animated.i
        className="fa fa-arrow-left"
        style={{ ...LinkDiv, color: NewTheme.btnColor }}
      /> */}
    </div>
  );
};

export default Home;
