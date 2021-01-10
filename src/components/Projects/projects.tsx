import React from "react";
import { animated, useSpring } from "react-spring";
import { Tweet } from "react-twitter-widgets";
import PData from "../../app_data/projects_data";
import Skills from "../Skills/skills";
import Languages from "../Languages/languages";

import "./projects.scss";
import { observer } from "mobx-react-lite";

type Props = {
  borderColor: string;
};
const Projects = observer(({ borderColor }: Props) => {
  const masterProp = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <animated.div
      className="projects container"
      style={{
        ...masterProp,
      }}
    >
      <div
        className="intro-skills"
        style={{ borderBottom: `solid 1px ${borderColor}` }}
      >
        <div className="skills">
          <Skills />
        </div>
        <div className="languages">
          <Languages />
        </div>
      </div>
      {PData.map((item, i) => {
        const int = i + 2;
        const isEven = int % 2 === 0;
        return (
          <div
            className={`project ${isEven ? "odd-par" : "even-par"}`}
            key={item.id}
            style={{ borderBottom: `solid 1px ${borderColor}` }}
          >
            <div className={`proj ${isEven ? "odd" : "even"}`}>
              <div className="body">
                <h2 className="title">
                  {item.title}
                  {item.hosted && <small>-- hosted on {item.hosted}</small>}
                </h2>
                <div className="live-demo">
                  {item.links.map((i, index) => {
                    const myTest = /Live|Website|Store/g.test(i.title);
                    return (
                      <a
                        href={i.link}
                        target={i.download ? "" : "_blank"}
                        rel="noopener noreferrer"
                        key={index}
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
                  {item.url && <img src={item.url} alt="source: imgur.com" />}
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
  );
});

export default Projects;
