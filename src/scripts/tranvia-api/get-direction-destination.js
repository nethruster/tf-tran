var destinations = [["La Trinidad", "Intercambiador"], ["La Cuesta", "Tíncer"]];

export default function getDirectionDestination(route, direction) {
  let routeArr = destinations[route];
  if (routeArr === undefined) {
    return "Error, no hay suficiente información sobre la linea.";
  }

  let result = routeArr[direction];
  if (result === undefined) {
    return "Error, dirección no valida";
  }

  return result;
}
