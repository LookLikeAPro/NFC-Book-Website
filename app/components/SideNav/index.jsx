import React from "react";

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import {Link} from "react-router";

import AppBar from "material-ui/lib/app-bar";

require('./style');

import {Component} from "react";

export default class TopNav extends Component {
  state = {
    open: false
  };
  toggle() {
    this.setState({open: !this.state.open});
  }
  handleClose() {
    this.setState({open: false});
  }
  render() {
    return (<LeftNav open={this.state.open} docked={false} onRequestChange={open => this.setState({open})}>
        <AppBar title="Navigation"/>
        <Link to={`/`}><MenuItem>Catalog</MenuItem></Link>
        <Link to={`/about`}><MenuItem>About</MenuItem></Link>
      </LeftNav>);
  }
}
