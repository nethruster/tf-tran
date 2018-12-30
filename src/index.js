import { h, render, Component } from 'preact'
import { bind } from 'decko'
import { Provider } from 'unistore/preact'
import 'preact/debug' // TODO Remove on prod

import ContentShell from 'content-shell'

import { store } from 'store'

import './styles/index.scss'

const mountPoint = document.getElementById('mount-point')

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContentShell />
      </Provider>
    )
  }
}

render(<App />, mountPoint, mountPoint.lastElementChild)

