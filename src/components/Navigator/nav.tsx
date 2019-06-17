import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import './nav.scss'
import { Links } from '../Main/main'
import { useSpring, animated } from 'react-spring'

interface Props extends RouteComponentProps {
    route: string | null;
    clicked: boolean;
    setClicked: Function;
}

const Nav = (props: Props) => {

    const sprProps = useSpring({
        opacity: 1,
        reverse: !props.clicked && window.innerWidth < 1000,
        transform: "translateX(0%)",
        from: { opacity: 0, transform: "translateX(-100%)" }
    })
    const { x } = useSpring({x: props.route === "contact" ? 1 : 0, config: { duration: 1000 }, from: { x: 0} })
    return (
        <div className={`master-nav ${props.clicked ? "appear" : ""}`}>
            <animated.div className={`animated-nav ${props.route}-nav`} style={sprProps}>
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
                                    onClick={() => props.setClicked(false)}
                                    className="linker"
                                >
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                    <div className="links">
                        <div className={`sublinks ${props.route === "contact" ? "glow" : ""}`}>
                            <animated.a
                                href="https://github.com/MarcDwyer?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fa fa-github"
                                style={{
                                     //@ts-ignore
                                    opacity: x.interpolate({ output: [0.8, 1] }),
                                    transform: x
                                        .interpolate({
                                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                        })
                                        .interpolate(x => `scale(${x})`)
                                }}
                            />
                            <animated.a
                                href="https://www.linkedin.com/in/marc-dwyer-53087339/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fa fa-linkedin"
                                style={{
                                    //@ts-ignore
                                    opacity: x.interpolate({ output: [0.7, 1] }),
                                    transform: x
                                        .interpolate({
                                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                        })
                                        .interpolate(x => `scale(${x})`)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>
    )
}

export default withRouter(Nav)