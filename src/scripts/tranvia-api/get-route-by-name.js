export default function getRouteByName(routes, routeName) {
  return routes[parseInt(routeName) - 1];
}
