import { h } from 'preact'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../../views/home'

export default function ContentRouter() {
  return (
    <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          />
        </Switch>
      </BrowserRouter>
  )
}
