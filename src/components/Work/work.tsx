import React from 'react'
import { WorkExp } from '../../data/data'
import { useSpring, animated } from 'react-spring'
import './work.scss'

const Work = () => {

    const cardProps = useSpring({
        transform: "translateX(0%)",
        opacity: 1,
        from: { transform: "translateX(100%)", opacity: 0}
    })
    return (
        <div className="master work">
            <animated.div className="card-flex" style={cardProps}>
                {WorkExp.map(job => {
                    return (
                        <div className="card work-card" style={cardProps} key={job.companyName}>
                            <h2>{job.companyName}</h2>
                            <div className="inner-content">
                                {job.currentJob ? (
                                    <div className="present">
                                        <i className="fa fa-check" style={{ color: "#7FBF7F" }} />
                                        <span> Present Job</span>
                                    </div>
                                ) : (
                                        <span>Worked for: {job.duration} {job.duration <= 1 ? "year" : "years"}</span>
                                    )}
                                <p>
                                    {job.descriptionRole}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </animated.div>
        </div>
    )
}

export default Work