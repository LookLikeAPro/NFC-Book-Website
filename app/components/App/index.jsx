'use strict';

var React        = require('react'),
    RouteHandler = require('react-router').RouteHandler,
    mui          = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    TopNav       = require('../TopNav'),
    SideNav      = require('../SideNav');

require('./style');

import books from "../../data/books.json";

var Application = React.createClass({
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
      books: books
    };
  },

  render: function() {
    return <div className={'application'}>
      <TopNav onMenuIconButtonTouch={this._onMenuIconButtonTouch}/>
      <SideNav ref='sideNav' />
      <RouteHandler />
    </div>;
  },

  _onMenuIconButtonTouch: function() {
    this.refs.sideNav.toggle();
  }
});

Application.childContextTypes = {
  muiTheme: React.PropTypes.object,
  books: React.PropTypes.array
};

module.exports = Application;
