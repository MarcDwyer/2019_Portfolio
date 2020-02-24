import React, { useState } from "react";
import Nav from "../Navigator/nav";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import Projects from "../Projects/projects";
import Home from "../Home/home";
import Contact from "../Contact/contact";
import Work from "../Work/work";

import "./main.scss";

const getMenuColor = (clicked: boolean, route: string): string => {
  let str = "black";
  if (clicked) {
    str = "white";
  }
  return str;
};

export const history = createBrowserHistory();
const Main = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="master-div">
      <i className="fa fa-bars" onClick={() => setClicked(!clicked)} />
      <Router history={history}>
        <Nav clicked={clicked} setClicked={setClicked} />
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
