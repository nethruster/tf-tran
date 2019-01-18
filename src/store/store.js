import createStore from "unistore";

import initialStore from "./initial-store.js";
import actions from "./actions";

let store = null;

store = createStore(initialStore);

export { store, actions };
