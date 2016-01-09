import React from "react";
import ReactDOM from "react-dom";
import {Router, hashHistory} from "react-router"
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from "../app/routes";

injectTapEventPlugin();

ReactDOM.render(
  <Router history={hashHistory} children={routes}>
  </Router>,
  document.getElementById("content")
);
