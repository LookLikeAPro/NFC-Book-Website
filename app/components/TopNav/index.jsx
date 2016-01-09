import React from "react";
import AppBar from "material-ui/lib/app-bar";

module.exports = React.createClass({
  render: function() {
    return <AppBar title="NFC SmartBook" onTouchTap={this.props.onMenuIconButtonTouch} iconClassNameRight="muidocs-icon-navigation-expand-more" />
  }
});
