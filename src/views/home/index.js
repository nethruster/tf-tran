import { h, Component } from "preact";
import { connect } from "unistore/preact";
import { bind } from "decko";
import { Link } from "react-router-dom";

import Icon from "icon";

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
    renderRouteStops(route, stops) {
      if (!stops) {
        return <p>No se han podido cargar las paradas</p>;
      }

      return Object.keys(stops).map(stop => {
        return (
          <Link to={`/${route}/${stop}`} class={style.listingItemLink}>
            <li class={`flex flex-cross-center flex-sb ${style.listingItem}`}>
              <p class={`truncate ${style.stopTitle}`}>{stop}</p>
              <div class={`flex flex-full-center ${style.listingItemIcon}`}>
                <Icon name="next" color="var(--color-secondary)" size="28" />
              </div>
            </li>
          </Link>
        );
      });
    }

    @bind
    renderLines() {
      if (!this.props.routes) {
        return <p>No se han podido cargar las paradas</p>;
      }

      return this.props.routes.map(route => {
        return (
          <div
            class={`flex flex-main-center ${style.lineListingContainer}`}
            data-line={route.name}
          >
            <ul>{this.renderRouteStops(route.name, route.stops)}</ul>
          </div>
        );
      });
    }

    render({ routes }) {
      return (
        <div class={style.homeWrapper}>
          {routes === null ? (
            <p class="text-center">Cargando datos...</p>
          ) : (
            this.renderLines()
          )}
        </div>
      );
    }
  }
);
