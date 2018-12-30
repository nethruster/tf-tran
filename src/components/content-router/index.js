import { h } from "preact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../../views/home";
import Stop from "../../views/stop";

export default function ContentRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:route/:stop" component={Stop} />
      </Switch>
    </BrowserRouter>
  );
}
