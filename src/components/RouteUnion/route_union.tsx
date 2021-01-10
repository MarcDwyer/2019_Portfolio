import { observer } from "mobx-react-lite";
import { ThemeStore } from "../../store/theme_store";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Projects from "../Projects/projects";
import Contact from "../Contact/contact";
import Work from "../Work/work";
import Home from "../Home/home";

type Props = {
  ts: ThemeStore;
};
export const RouteUnion = observer(({ ts }: Props) => {
  return (
    <div
      style={{
        backgroundColor: ts.theme.routeBgColor,
        color: ts.theme.color,
        overflowY: "auto",
        height: "100vh",
        display: "flex",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Switch>
        <Route
          path="/projects"
          render={(p) => <Projects {...p} borderColor={ts.theme.borderColor} />}
        />
        <Route
          path="/work"
          render={(p) => <Work {...p} cardColor={ts.theme.cardColor} />}
        />
        <Route
          path="/contact"
          render={(p) => <Contact {...p} theme={ts.theme} />}
        />
        <Route path="/" render={(p) => <Home {...p} ts={ts} />} />
      </Switch>
    </div>
  );
});
