import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducers";
import "./index.css";
import App from "./App";
import Result from "./components/Result";
import * as serviceWorker from "./serviceWorker";

let store = createStore(reducer);

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
      <hr />
      <Result store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
