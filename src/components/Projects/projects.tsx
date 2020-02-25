import React from "react";
import { animated, useSpring } from "react-spring";
import { Tweet } from "react-twitter-widgets";
import { projectsData } from "../../data/data";
import { Container } from "../../styled-comps/containers";

import "./projects.scss";

const Projects = () => {
  const masterProp = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });
  return (
    <Container className="master projects" style={masterProp}>
      <animated.div className="sub-project" style={masterProp}>
        {projectsData.map((item, i) => {
          const int = i + 2;
          const isEven = int % 2 === 0;
          console.log(isEven);
          return (
            <div
              style={{ backgroundColor: `${isEven ? "#bcbcbc" : "#D1D1D1"}` }}
              className={`project ${isEven ? "odd-par" : "even-par"}`}
              key={i}
            >
              <div className={`proj ${isEven ? "odd" : "even"}`}>
                <div className="body">
                  <h2 className="title">
                    {item.title}
                    {item.hosted && <small> -- hosted on {item.hosted}</small>}
                  </h2>
                  <div className="live-demo">
                    {item.links.map(i => {
                      const myTest = /Live|Website|Store/g.test(i.title);
                      return (
                        <a
                          href={i.link}
                          target={i.download ? "" : "_blank"}
                          rel="noopener noreferrer"
                          key={i.link}
                          className={myTest ? "live-button" : ""}
                        >
                          {i.title}
                        </a>
                      );
                    })}
                  </div>
                  <span>Stack: {item.stack}</span>
                  <p>{item.details}</p>
                </div>
                {!/Reddit/g.test(item.title) ? (
                  <React.Fragment>
                    {item.url && <img src={item.url} alt="application" />}
                  </React.Fragment>
                ) : (
                  <div className="tweeter">
                    <Tweet tweetId={"1138879923362455553"} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </animated.div>
    </Container>
  );
};

export default Projects;
