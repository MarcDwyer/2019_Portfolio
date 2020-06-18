import React from "react";
import WorkExp from "../../data/work_exp";
import { useSpring, animated } from "react-spring";
import { Container } from "../../styled-comps/containers";
import { myColors } from "../../styled-comps/global-styles";

import "./work.scss";

const Work = () => {
  const cardProps = useSpring({
    transform: "translateX(0%)",
    opacity: 1,
    from: { transform: "translateX(100%)", opacity: 0 },
  });
  return (
    <Container bgColor={myColors.lightGrey}>
      <animated.div className="card-flex" style={cardProps}>
        <div className="inner-card">
          {WorkExp.map((job, i) => {
            return (
              <div className="card work-card" key={i}>
                <div className="actual-content">
                  <div className="headers">
                    <span className="company-name">{job.companyName}</span>
                    <span className="job-title">{job.title}</span>
                  </div>
                  <div className="inner-content">
                    {job.currentJob ? (
                      <div className="present">
                        <i
                          className="fa fa-check"
                          style={{ color: "#7FBF7F" }}
                        />
                        <span>Present Job</span>
                      </div>
                    ) : (
                      <span>
                        {`Worked for: ${job.duration || "No duration given"}`}
                      </span>
                    )}
                    <ul>
                      {job.descriptionRole.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </animated.div>
    </Container>
  );
};

export default Work;
