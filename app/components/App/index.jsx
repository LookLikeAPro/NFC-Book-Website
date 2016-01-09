import React, {Component} from "react";

import TopNav from "components/TopNav";
import SideNav from "components/SideNav";

require('./style');

import books from "../../data/books.json";

export default class Application extends Component {
  static childContextTypes = {
    books: React.PropTypes.array
  };
  getChildContext () {
    return {
      books: books
    };
  }
  render () {
    return <div className={'application'}>
      <TopNav onMenuIconButtonTouch={::this._onMenuIconButtonTouch}/>
      <SideNav ref='sideNav' />
      {this.props.children}
    </div>;
  }
  _onMenuIconButtonTouch() {
    this.refs.sideNav.toggle();
  }
}
