export function capitalize(string) {
  if (string === undefined || string.toLowerCase === undefined) {
    return ""
  }
  return string
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getFilteredRoutesArray(routes, filterKey) {
  let filteredRoutesArray = _deepCopyRoutes(routes);
  filterKey = filterKey.toLowerCase().trim();

  filteredRoutesArray.forEach(route => {
    let allowedStopValues = Object.keys(route.stops).filter(stop => {
      return stop.toLowerCase().includes(filterKey);
    });

    route.stops = _filterObjectByKeys(route.stops, allowedStopValues);
  });

  return filteredRoutesArray;
}

export function checkSearchResults(searchResults) {
  let result = false;
  searchResults.forEach(route => {
    if (Object.keys(route.stops).length > 0) {
      result = true;
    }
  });

  return result;
}

function _filterObjectByKeys(object, filterKeys) {
  return filterKeys
    .map(key => {
      return object.hasOwnProperty(key) ? { [key]: object[key] } : {};
    })
    .reduce(
      (accumulator, currentValue) => Object.assign(accumulator, currentValue),
      {}
    );
}

function _deepCopyRoutes(routes) {
  let newArray = [];

  routes.forEach(route => {
    newArray.push({
      name: route.name,
      stops: Object.assign({}, route.stops)
    });
  });

  return newArray;
}
