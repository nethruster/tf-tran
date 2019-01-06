const initialStore = {
  routes: null,
  lastUpdated: Date.now(),
  isOnline: navigator.onLine,
  errors: [],
  selectedStop: "",
  search: {
    searchState: false,
    filteredRoutes: null,
    hasResults: false
  }
};

export default initialStore;
