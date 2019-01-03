import { h, Component } from "preact";
import { bind } from "decko";

import Stop from "./stop-item";

import style from "./styles.scss";

export default class Route extends Component {
  constructor(props) {
    super(props);
  }

  @bind
  renderRouteStops() {
    let route = this.props.route;
    let stops = route.stops;

    if (!stops) {
      return <p class="text-center">No se han podido cargar las paradas</p>;
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
