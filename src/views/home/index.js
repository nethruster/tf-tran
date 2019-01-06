import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { bind } from "decko";

import Route from "./route";
import Loader from "loader";

import { actions } from "store";

import style from "./styles.scss";

export default connect(
  ["routes", "search"],
  actions
)(
  class Home extends Component {
    constructor(props) {
      super(props);
    }

    @bind
    renderRoutes() {
      let { routes, search } = this.props;

      let routesToRender = search.searchState ? search.filteredRoutes : routes;

      return routesToRender.map(route => {
        return <Route route={route} />;
      });
    }

    render({ routes }) {
      return (
        <div class={style.homeWrapper}>
          {routes === null ? <Loader /> : this.renderRoutes()}
        </div>
      );
    }
  }
);
