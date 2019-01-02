import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { bind } from "decko";

import Route from "./route";
import Loader from "loader";

import { actions } from "store";

import style from "./styles.scss";

export default connect(
  "routes",
  actions
)(
  class Home extends Component {
    constructor(props) {
      super(props);
    }

    @bind
    renderRoutes() {
      if (!this.props.routes) {
        return <p class="text-center">No se han podido cargar las paradas</p>;
      }

      return this.props.routes.map(route => {
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
