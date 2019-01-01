import { h, Component } from "preact";
import { bind } from "decko";
import { connect } from "unistore/preact";

import Stop from "./stop-item";
import { actions } from "store";

import style from "./styles.scss";

export default connect(
  "searchKey",
  actions
)(
  class Route extends Component {
    constructor(props) {
      super(props);
    }

    @bind
    renderRouteStops() {
      let searchKey = this.props.searchKey;
      let route = this.props.route;
      let stops = route.stops;

      if (!stops) {
        return <p class="text-center">No se han podido cargar las paradas</p>;
      }

      if (searchKey) {
        return Object.keys(stops).map(stop => {
          return (
            stop.toLowerCase().includes(searchKey) && (
              <Stop link={`/${route.name}/${stop}`} stop={stop} />
            )
          );
        });
      }

      return Object.keys(stops).map(stop => {
        return <Stop link={`/${route.name}/${stop}`} stop={stop} />;
      });
    }

    render({ route }) {
      return (
        <ul
          class={`flex flex-main-center flex-dc ${style.lineListingContainer}`}
          data-line={route.name}
        >
          {this.renderRouteStops()}
        </ul>
      );
    }
  }
);
