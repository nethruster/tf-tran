const initialStore = {
  routes: null,
  lastUpdated: Date.now(),
  isOnline: navigator.onLine,
  fetchEndedSuccessfully: true,
  metroTenerifeIsOnline: true,
  selectedStop: "",
  search: {
    searchState: false,
    filteredRoutes: null,
    hasResults: false
  }
};

export default initialStore;
