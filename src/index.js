import { h, render, Component } from 'preact'
import { bind } from 'decko'
import 'preact/debug' // TODO Remove on prod

import BaseRouter from './base-router'
// import tranvia from "./scripts/tranvia-api"

const mountPoint = document.getElementById('mount-point')

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BaseRouter/>
    )
  }
}

render(<App />, mountPoint, mountPoint.lastElementChild)

