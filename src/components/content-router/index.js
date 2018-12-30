import { h } from "preact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "header";
import Home from "../../views/home";
import Stop from "../../views/stop";

export default function ContentRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:route/:stop" component={Stop} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
