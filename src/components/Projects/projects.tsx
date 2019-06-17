import React from 'react'
import './projects.scss'
import { animated, useSpring } from 'react-spring'
import { Tweet } from 'react-twitter-widgets'
import { projectsData, ProjectsType } from '../../data/data'


const getImageJsx = (proj: ProjectsType): JSX.Element | null => {
    let result = <img src={proj.url} alt="application" />
    switch (proj.id) {
        case 2:
            result = <div className="tweeter">
                <Tweet tweetId={"1138879923362455553"} />
            </div>
            break
        case 4:
            result = null
    }
    return result
}

const Projects = () => {
    const masterProp = useSpring({
        transform: "translateX(0%)",
        from: { transform: "translateX(-100%)" }
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
                                {getImageJsx(item)}
                            </div>
                        </div>
                    )
                })}
            </animated.div>
        </div>
    )
}

export default Projects