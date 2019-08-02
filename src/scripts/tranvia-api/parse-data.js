import { capitalize } from "../utils";

export default function parseData(data) {
  if (!data) {
    throw new Error("Empty data provided");
  }

  var routes = [];

  data.forEach(item => {
    if (routes[item.route - 1] === undefined) {
      routes[item.route - 1] = { name: `${item.route}`, stops: {} };
    }

    let route = routes[item.route - 1];
    item.stopDescription = capitalize(item.stopDescription);

    let tram = {
      remainingMinutes: item.remainingMinutes
    };
    if (!route.stops.hasOwnProperty(item.stopDescription)) {
      route.stops[item.stopDescription] = [[], []];
    }

    route.stops[item.stopDescription][item.direction - 1].push(tram);
  });

  for (let i = routes.length - 1; i >= 0; i--) {
    sortRouteStopArrivals(routes[i]);
  }

  return routes;
}

function sortStopArrivals(stopA, stopB) {
  return stopA.remainingMinutes - stopB.remainingMinutes;
}

function sortRouteStopArrivals(route) {
  Object.keys(route.stops).forEach(item => {
    route.stops[item][0].sort(sortStopArrivals);
    route.stops[item][1].sort(sortStopArrivals);
  });
}
