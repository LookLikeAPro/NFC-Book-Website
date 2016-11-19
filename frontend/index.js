import React from "react";
import {render} from "react-dom";
import MainApp from "./mainApp";
import {browserHistory} from "react-router";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

render(<MainApp history={browserHistory}/>, document.getElementById("content"));
