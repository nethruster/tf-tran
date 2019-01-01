export default function(data) {
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
  for (var i = routes.length - 1; i >= 0; i--) {
    sortRoute(routes[i]);
  }

  return routes;
}

function sortRoute(route) {
  var sortFunction = (a, b) => a.remainingMinutes - b.remainingMinutes;
  Object.keys(route.stops).forEach(item => {
    route.stops[item][0].sort(sortFunction);
    route.stops[item][1].sort(sortFunction);
  });
}

function capitalize(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
