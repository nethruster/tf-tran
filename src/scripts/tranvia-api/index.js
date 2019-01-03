import fetchData from "./fetch-data";
import parseData from "./parse-data";
import getRouteByName from "./get-route-by-name";
import getDirectionDestination from "./get-direction-destination";
import getRemainingMinutesString from "./get-remaining-time-string";

function fetchAndParse(uri) {
  return fetchData(uri).then(data => parseData(data));
}

export default {
  fetchAndParse,
  getRouteByName,
  getDirectionDestination,
  getRemainingMinutesString
};
