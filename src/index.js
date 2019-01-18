import { h, render, Component } from "preact";
import { Provider } from "unistore/preact";

import ContentShell from "content-shell";

import { store } from "store";
import loadSW from 'load-sw'

import "./styles/index.scss";

const mountPoint = document.getElementById("mount-point");

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContentShell />
      </Provider>
    );
  }
}

render(<App />, mountPoint, mountPoint.lastElementChild);
loadSW()
