import fetch from './fetch'
import parse from './parseData'
import getRouteByName from './get-route-by-name'
import getDirectionDestination from './get-direction-destination'
import getRemainingMinutesString from './get-remaining-time-string'

function fetchAndParse(uri) {
  return fetch(uri)
    .then(data => parse(data))
}

export default {
  fetchAndParse,
  fetch,
  parse,
  getRouteByName,
  getDirectionDestination,
  getRemainingMinutesString
}

