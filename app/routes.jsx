'use strict';

var React        = require('react');

import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

// polyfill
if (!Object.assign) {
  Object.assign = React.__spread;
}

// export routes
module.exports = (
  <Route name='app' path='/' handler={require('./components/App')}>
    <Route name='about' path='about' handler={require('./components/About')} />
    <Route name='catalog' path='/' handler={require('./components/Home')} />
    <Route name="book" path="book/:link" handler={require('./components/ItemDetails')} />
    <NotFoundRoute handler={require('./components/404')} />
  </Route>
);
