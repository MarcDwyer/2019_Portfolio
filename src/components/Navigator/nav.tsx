import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import './nav.scss'
import { Links } from '../Main/main'
import { useSpring, animated } from 'react-spring'

interface Props extends RouteComponentProps {
    route: string | null;
}


const Nav = (props: Props) => {

    const sprProps = useSpring({
        opacity: 1,
        marginLeft: "0",
        from: { opacity: 0, marginLeft: "-350px" }
    })

    return (
        <div className="master-nav">
            <animated.div className="animated-nav" style={sprProps}>
                <div className="subDiv">
                    <img src="https://s3.us-east-2.amazonaws.com/fetchappbucket/port/me.jpg" alt="me" />
                    <div className="inner-text">
                        <h1>Marc Dwyer</h1>
                        <h3>Web Developer</h3>
                    </div>
                    <div className="app-links">
                        {Links.map((item: string) => {
                            const lowerStr = item.toLowerCase()
                            const path = lowerStr === "home" ? "/" : lowerStr
                            return (
                                <Link
                                    style={props.route === lowerStr || (lowerStr === "home" && !props.route) ? { color: "rgba(255,255,255,1)" } : {}}
                                    key={item}
                                    to={path}
                                    className="linker"
                                >
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                    <div className="links">
                        <div className="sublinks">
                            <a
                                href="https://github.com/MarcDwyer?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fa fa-github"
                            />
                            <a
                                href="https://www.linkedin.com/in/marc-dwyer-53087339/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fa fa-linkedin"
                            />
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>
    )
}

export default withRouter(Nav)