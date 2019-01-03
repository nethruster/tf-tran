const initialStore = {
  routes: null,
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
