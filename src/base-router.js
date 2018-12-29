import { h } from 'preact'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'

export default function BaseRouter(props) {
  return(
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={routerProps => <Home/>}
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
