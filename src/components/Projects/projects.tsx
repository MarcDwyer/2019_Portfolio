import React from 'react'
import './projects.scss'
import { animated, useSpring } from 'react-spring'
import { Tweet } from 'react-twitter-widgets'
import { projectsData } from '../../data/data'

const Projects = () => {
    const masterProp = useSpring({
        opacity: 1,
        transform: "translateY(0%)",
        from: { opacity: 0, transform: "translateY(100%)" },
    })
    return (
        <div className="master-projects" style={masterProp}>
            <animated.div className="sub-project" style={masterProp}>
                {projectsData.map((item, i) => {
                    const int = i + 2
                    return (
                        <div className={`project ${int % 2 !== 0 ? "odd-par" : "even-par"}`} key={item.url}>
                            <div className={`proj ${int % 2 !== 0 ? "odd" : "even"}`}>
                                <div className="body">
                                    <h2 className="title">{item.title}
                                        <small> -- hosted on {item.hosted}</small>
                                    </h2>
                                    <div className="live-demo">
                                        {item.links.map(i => {
                                            const isLive = i.title.startsWith("Live")
                                            return (
                                                <a
                                                    href={i.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key={i.link}
                                                    className={isLive ? "live-button" : ""}
                                                >
                                                    {i.title}
                                                </a>
                                            )
                                        })}
                                    </div>
                                    <span>Stack: {item.stack}</span>
                                    <p>{item.details}</p>
                                </div>
                                {item.title.startsWith("GraphQL") ? (
                                    <div className="tweeter">
                                        <Tweet tweetId={"1138879923362455553"} />
                                    </div>
                                ) : (
                                        <img src={item.url} alt="application" />
                                    )}
                            </div>
                        </div>
                    )
                })}
            </animated.div>
        </div>
    )
}

export default Projects