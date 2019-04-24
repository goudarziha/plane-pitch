import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header";
import B24 from "./components/B24";
import B25 from "./components/B25";
import P47 from "./components/P47";
import P40 from "./components/P40";

const routing = (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/b24" component={B24} />
        <Route exact path="/b25" component={B25} />
        <Route exact path="/p47" component={P47} />
        <Route exact path="/p40" component={P40} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
