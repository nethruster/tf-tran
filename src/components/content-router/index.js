import { h } from "preact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "unistore/preact";

import Header from "header";
import Home from "../../views/home";
import Stop from "../../views/stop";
import NoConnection from "../../views/no-connection";
import NoResults from "../../views/no-results";
import NoServerConnection from '../../views/no-server-connection'
import NoStops from '../../views/no-stops'
import ConnectionError from "./warnings/connection-error";

import { actions } from "store";

function renderMainContent(search, isOnline, routes, fetchEndedSuccessfully, metroTenerifeIsOnline) {
   if (!isOnline && routes === null) {
    return <NoConnection />;
  }

  if(routes === null && !fetchEndedSuccessfully) {
    return <NoServerConnection metroTenerifeFault={!metroTenerifeIsOnline}/>;
  }

  if(routes && routes.length === 0) {
    return <NoStops />
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
  ["routes", "isOnline", "fetchEndedSuccessfully", "metroTenerifeIsOnline","search"],
  actions
)(function ContentRouter({ routes, isOnline, fetchEndedSuccessfully, metroTenerifeIsOnline,search, isScrollOutsideHeader }) {
  return (
    <BrowserRouter>
      <div>
        <Header isScrollOutsideHeader={isScrollOutsideHeader} />
        {routes !== null && !(isOnline && fetchEndedSuccessfully) && <ConnectionError notOnline={!isOnline} metroTenerifeOnline={metroTenerifeIsOnline}/>}
        {renderMainContent(search, isOnline, routes, fetchEndedSuccessfully, metroTenerifeIsOnline)}
      </div>
    </BrowserRouter>
  );
});
