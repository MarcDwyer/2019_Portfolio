import React, { useState, useEffect } from 'react'
import Nav from '../Navigator/nav'
import { matchPath, withRouter, Route, Switch } from 'react-router-dom'
import { match, RouteComponentProps } from 'react-router'
import './main.scss'

import Projects from '../Projects/projects'
import Home from '../Home/home'
import Contact from '../Contact/contact'
import Work from '../Work/work'


export const Links = ["Home", "Projects", "Work", "Contact"]

const checkRoute = (path: string): string | null => {
    const match: match<{ param: string }> = matchPath(path, {
        path: '/:param',
        exact: true,
        strict: false
    })
    if (match && match.params.param.length > 0) {
        return match.params.param
    } else {
        return null
    }
}
const getMenuColor = (clicked: boolean, route: string): string => {
    let str = "white";
    if (clicked) return str
    switch (route) {
        case "projects":
            str = "black"
        default:
            return str
        }
}
const Main = (props: RouteComponentProps) => {
    const location = props.location.pathname
    const [route, setRoute] = useState<string | null>(checkRoute(location))
    const [clicked, setClicked] = useState<boolean>(false)

    useEffect(() => {
        const check = checkRoute(location)
        if (check !== route) setRoute(check)
    }, [location])
    return (
        <div className="master-div">
            <i
                className="fa fa-bars"
                style={{ color: getMenuColor(clicked, route) }}
                onClick={() => setClicked(!clicked)}
            />
            <Nav route={route} clicked={clicked} setClicked={setClicked} />
            <Switch>
                <Route path="/projects" component={Projects} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    )
}

export default withRouter(Main)