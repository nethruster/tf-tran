import tranvia from "../scripts/tranvia-api"

export default store => ({
  updateRoutes(state) {
    return tranvia.fetchAndParse()
      .then(data => ({ routes: data, lastUpdate: Date.now()}))
      .catch(err => {
        console.error(err)
        addError(state, "Error al obtener los datos")
      })
  },
  addError(state, err) {
    let newErrs = [...state.error, err]
    store.setState({errors: newErrs})
  },
  delOldestError(state){
    let newErrs = [...state.error]
    newErrs.shift()
    store.setState({ errors: newErrs })
  }
})