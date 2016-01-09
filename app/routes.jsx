import React from "react";

import {Route, IndexRoute} from "react-router";

import App from "components/App";
import About from "components/About";
import Home from "components/Home";
import ItemDetails from "components/ItemDetails"
import NotFound from "components/404"

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path="book/:link" component={ItemDetails} />
    <Route path="*" component={NotFound} />
  </Route>
);
