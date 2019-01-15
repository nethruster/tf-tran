import { h } from "preact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "unistore/preact";

import Header from "header";
import Home from "../../views/home";
import Stop from "../../views/stop";
import NoConnection from "../../views/no-connection";
import NoResults from "../../views/no-results";
import NoServerConnection from '../../views/no-server-connection'
import ConnectionError from "./warnings/connection-error";

import { actions } from "store";

function renderMainContent(search, isOnline, routes, fetchEndedSuccessfully) {
   if (!isOnline && routes === null) {
    return <NoConnection />;
  }

  if(routes === null && !fetchEndedSuccessfully) {
    return <NoServerConnection />;
  }
  
  if (search.searchState && !search.hasResults) {
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
  ["routes", "isOnline", "fetchEndedSuccessfully", "search"],
  actions
)(function ContentRouter({ routes, isOnline, fetchEndedSuccessfully, search, isScrollOutsideHeader }) {
  return (
    <BrowserRouter>
      <div>
        <Header isScrollOutsideHeader={isScrollOutsideHeader} />
        {routes !== null && !(isOnline && fetchEndedSuccessfully) && <ConnectionError global={!isOnline} />}
        {renderMainContent(search, isOnline, routes, fetchEndedSuccessfully)}
      </div>
    </BrowserRouter>
  );
});
