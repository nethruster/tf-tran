import { h } from "preact";

import Stop from "./stop-item";

import style from "./styles.scss";

function renderRouteStops(route, stops) {
  if (!stops) {
    return <p>No se han podido cargar las paradas</p>;
  }

  return Object.keys(stops).map(stop => {
    return <Stop link={`/${route}/${stop}`} stop={stop} />;
  });
}

export default function Route({ route }) {
  return (
    <div
      class={`flex flex-main-center ${style.lineListingContainer}`}
      data-line={route.name}
    >
      <ul>{renderRouteStops(route.name, route.stops)}</ul>
    </div>
  );
}
