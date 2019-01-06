import tranviaAPI from "../scripts/tranvia-api";

export default store => ({
  updateRoutes(state) {
    return tranviaAPI
      .fetchAndParse()
      .then(data => ({
        routes: data,
        lastUpdated: Date.now()
      }))
  },
  updateOnlineStatus() {
    return new Promise((resolve, reject) => {
      store.setState({ isOnline: navigator.onLine });
      resolve();
    });
  },
  addError(state, err) {
    let newErrs = [...state.error, err];
    store.setState({ errors: newErrs });
  },
  delOldestError(state) {
    let newErrs = [...state.error];
    newErrs.shift();
    store.setState({ errors: newErrs });
  },
  setCurrentStop(state, stop) {
    store.setState({ selectedStop: stop });
  },
  resetCurrentStop(state) {
    store.setState({ selectedStop: "" });
  },
  setSearchState(state, searchState, filteredRoutes, hasResults) {
    let newState = {
      searchState,
      filteredRoutes,
      hasResults
    };

    store.setState({ search: newState });
  }
});
