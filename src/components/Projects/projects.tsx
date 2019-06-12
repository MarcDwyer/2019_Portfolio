import React from 'react'
import './projects.scss'

import { projects } from '../../data/data'

const Projects = () => {
    return (
        <div className="master-projects">
            {projects.map((item, i) => {
                const int = i + 2
                return (
                    <div className="project" key={item.url}>
                        <div className={`proj ${int % 2 !== 0 ? "odd" : "even"}`}>
                            <div className="body">
                                <h2>{item.title}</h2>
                                <span>Stack: {item.stack}</span>
                                <p>{item.details}</p>
                            </div>
                            <img src={item.url} alt="application" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects