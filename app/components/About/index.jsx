'use strict';

var React = require('react'),
    mui   = require('material-ui'),
    Paper = mui.Paper;

require('./style');

module.exports = React.createClass({
  render: function() {
    return <div className='aboutPage pageContent'>
      <h1>About page</h1>
      <p>The NFC SmartBook Project by Renison College is....</p>
      <Paper zDepth={2}>
        <img className='image' src={require('./coffee.jpg')} />
      </Paper>
    </div>;
  }
});
