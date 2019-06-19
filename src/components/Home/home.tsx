import React from 'react'
import { animated, useSpring } from 'react-spring'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import Particles from 'react-particles-js'
import { Params } from '../../data/data'
import './home.scss'

const Home = (props: RouteComponentProps) => {

    const iProps = useSpring({
        opacity: 1,
        from: {opacity: 0 }
    })
    return (
        <div className="home">
            <Particles
                style={{ backgroundColor: "#eee" }}
                params={Params}
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