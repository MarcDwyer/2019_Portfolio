import React, { useState, useEffect } from 'react'
import Nav from '../Navigator/nav'
import { matchPath, withRouter, Route, Switch } from 'react-router-dom'
import { match, RouteComponentProps } from 'react-router'
import './main.scss'

import Projects from '../Projects/projects'
import Home from '../Home/home'
import Contact from '../Contact/contact'

export const Links = ["Home", "Projects", "Contact"]


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
const Main = (props: RouteComponentProps) => {
    const location = props.location.pathname
    const [route, setRoute] = useState<string | null>(checkRoute(location))

    useEffect(() => {
        const check = checkRoute(location)
        if (check !== route) setRoute(check)
    }, [location])
    return (
        <div className="master-div">
            <Nav route={route} />
            <Switch>
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    )
}

export default withRouter(Main)