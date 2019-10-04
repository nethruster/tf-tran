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
  setFetchResult(state, status) {
    store.setState({ fetchEndedSuccessfully: status.sucessful, metroTenerifeIsOnline: status.metroTenerifeIsOnline });
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
