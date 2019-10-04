import createStore from "unistore";

import initialStore from "./initial-store.js";
import actions from "./actions";
import devtools from 'unistore/devtools'

let store = null;

store = devtools(createStore(initialStore));

export { store, actions };
