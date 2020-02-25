import React from "react";
import Nav from "../Navigator/nav";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import Projects from "../Projects/projects";
import Home from "../Home/home";
import Contact from "../Contact/contact";
import Work from "../Work/work";

import { MainContainer } from "../../styled-comps/containers";

import "./main.scss";

export const history = createBrowserHistory();
const Main = () => {
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
};

export default Main;
