import React from 'react'
import { animated, useSpring } from 'react-spring'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import Particles from 'react-particles-js'
import './home.scss'

const Home = (props: RouteComponentProps) => {

    const iProps = useSpring({
        opacity: 1,
        transform: "translateX(0%)",
        from: {transform: "translateX(100%)", opacity: 0 },
        delay: 250
    })
    return (
        <div className="home">
            <Particles
            />
            <animated.div className="welcome" style={iProps}>
                <span>Welcome to my portfolio!</span>
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