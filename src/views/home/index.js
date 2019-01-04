import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { bind } from "decko";

import Route from "./route";
import NoResults from "./no-results";
import Loader from "loader";

import { actions } from "store";

import style from "./styles.scss";

function _renderRoutes(routes) {
  return routes.map(route => {
    return <Route route={route} />;
  });
}

export default connect(
  ["routes", "search"],
  actions
)(
  class Home extends Component {
    constructor(props) {
      super(props);
    }

    @bind
    handleRouteRender() {
      let { routes, search } = this.props;

      if (routes == null) {
        return <p class="text-center">No se han podido cargar las paradas</p>;
      }

      if (search.searchState && !search.hasResults) {
        return <NoResults />;
      }

      let routesToRender = search.searchState ? search.filteredRoutes : routes;

      return _renderRoutes(routesToRender);
    }

    render({ routes }) {
      return (
        <div class={style.homeWrapper}>
          {routes === null ? <Loader /> : this.handleRouteRender()}
        </div>
      );
    }
  }
);
