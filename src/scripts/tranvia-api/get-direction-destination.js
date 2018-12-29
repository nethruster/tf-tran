var x = [
  ["La Trinidad", "Intercambiador"],
  ["La Cuesta", "Tíncer"]
]

export default function(route, direction) {
  let routeArr = x[route]
  if (routeArr === undefined) {
    return "Error, No hay suficiente información sobre la linea"
  }
  let result = routeArr[direction]
  if (result === undefined) {
    return "Error, Dirección no valida"
  }
  return result
}
