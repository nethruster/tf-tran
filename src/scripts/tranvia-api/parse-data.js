import { capitalize } from "../utils";
import stopsList from './stops-list';

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
    routes[i].stops = getSortedStops(stopsList[i], routes[i].stops)
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

function getSortedStops(stopList, stops) {
  if (stopList === undefined) {return stops}
  
  let sortedStops = {}
  Object.keys(stops).sort((stopA, stopB) => {
    let posA = stopList[stopA]
    if (posA === undefined) { return 0 } 
    let posB = stopList[stopB]
    if (posB === undefined) { return 0 } 

    return posA - posB
  }).forEach(key => {sortedStops[key] = stops[key]})
  return sortedStops
}
