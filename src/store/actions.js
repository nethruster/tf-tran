import tranviaAPI from "../scripts/tranvia-api";

export default store => ({
  updateRoutes(state) {
    return tranviaAPI
      .fetchAndParse()
      .then(data => ({ routes: data }))
      .catch(err => {
        console.error(err);
        addError(state, "Error al obtener los datos");
      });
  },
  updateOnlineStatus() {
    store.setState({ isOnline: navigator.onLine })
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
  setSearchKey(state, value) {
    value = value.trim().toLowerCase();
    store.setState({ searchKey: value });
  }
});
