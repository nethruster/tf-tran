import { h } from "preact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "unistore/preact";

import Header from "header";
import Home from "../../views/home";
import Stop from "../../views/stop";
import NoConnection from "../../views/no-connection";
import NoResults from "../../views/no-results";
import LostConnection from "./warnings/lost-connection";

import { actions } from "store";

function renderMainContent(search, isOnline, routes) {
  if (!isOnline && routes === null) {
    return <NoConnection />;
  } else if (search.searchState && !search.hasResults) {
    return <NoResults />;
  }
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:route/:stop" component={Stop} />
    </Switch>
  );
}

export default connect(
  ["routes", "isOnline", "search"],
  actions
)(function ContentRouter({ routes, isOnline, search }) {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {routes !== null && !isOnline && <LostConnection />}
        {renderMainContent(search, isOnline, routes)}
      </div>
    </BrowserRouter>
  );
});
