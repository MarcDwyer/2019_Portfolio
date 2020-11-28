import React from "react";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import Nav from "./components/Navigator/nav";
import Projects from "./components/Projects/projects";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Work from "./components/Work/work";

import { MainContainer } from "./styled-comps/containers";

export const history = createBrowserHistory();

export default function App() {
  return (
    <MainContainer>
      <Router history={history}>
        <Nav />
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </MainContainer>
  );
}
