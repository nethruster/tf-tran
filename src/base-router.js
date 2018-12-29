import { h } from 'preact'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'

export default function BaseRouter() {
  return(
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          component={Home}
        />
        {/* <Route
          exact
          path="/route/:route/stop/:stop"
          render={routerProps => <Stop {...routerProps} routes={props.data.routes} />}
        /> */}
      </Switch>
    </BrowserRouter>
  )
}
