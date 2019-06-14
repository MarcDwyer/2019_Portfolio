import React from 'react'
import { animated, useSpring } from 'react-spring'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import './home.scss'

const Home = (props: RouteComponentProps) => {

    const iProps = useSpring({
        left: "5px",
        opacity: 1,
        from: { left: "150px", opacity: 0 },
        delay: 200
    })
    const welcomeProps = useSpring({
        opacity: 1,
        transform: "translateX(0%)",
        from: { transform: "translateX(100%)", opacity: 0 }
    })
    return (
        <div className="home">
            <animated.div className="welcome" style={welcomeProps}>
                <span>Welcome to Marc Dwyer's portfolio!</span>
                <Link
                className="home-projects"
                to="/projects"
                >
                    View Projects
                </Link>
            </animated.div>
            <animated.i className="fa fa-arrow-left" style={iProps} />
        </div>
    )
}

export default Home