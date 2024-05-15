import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import reducers from "reducers";
import App from "./App";

//Sentry error tracking
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
 

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>,
  </Provider>,
  document.getElementById("root")
);
