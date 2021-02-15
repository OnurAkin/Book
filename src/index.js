import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./components/store";
import showResults from "./components/showResults";
import WizardForm from "./components/pages/App";
import 'bootstrap/dist/css/bootstrap.css';
const rootEl = document.getElementById("booking");
ReactDOM.render(
  <Provider store={store}>
    <div className="section-center">
 
      <WizardForm onSubmit={showResults} />

    </div>
  </Provider>,
  rootEl
);



