import React from "react";
import "./projects.scss";
import { animated, useSpring } from "react-spring";
import { Tweet } from "react-twitter-widgets";
import { projectsData, ProjectsType } from "../../data/data";

const Projects = () => {
  const masterProp = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });
  return (
    <div className="master-projects" style={masterProp}>
      <animated.div className="sub-project" style={masterProp}>
        {projectsData.map((item, i) => {
          const int = i + 2;
          return (
            <div
              className={`project ${int % 2 !== 0 ? "odd-par" : "even-par"}`}
              key={i}
            >
              <div className={`proj ${int % 2 !== 0 ? "odd" : "even"}`}>
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
    </div>
  );
};

export default Projects;
