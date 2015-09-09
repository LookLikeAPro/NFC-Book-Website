'use strict';

import React from "react";
import {Link} from "react-router";
import {RaisedButton, FlatButton, Snackbar, Card, CardHeader, CardText, CardTitle, CardActions, CardMedia, Avatar, Dialog} from "material-ui";

require('./style.sass');

module.exports = React.createClass({
  contextTypes: {
    books: React.PropTypes.array.isRequired
  },
  getInitialState () {
    return {
      books: this.context.books
    };
  },
  _onDialogSubmit () {
    
  },
  _downloadDialog (link) {
    console.log(link);
    this.refs.confirmDownload.show();
  },
  render () {
    var dialogActions = [
      { text: 'Cancel' },
      { text: 'Confirm', ref: 'submit', onTouchTap: this._onDialogSubmit}
    ];
    return <div className='homePage pageContent'>
      <Dialog ref="confirmDownload" title="Starting Download" actions={dialogActions} actionFocus="submit">
        Confirming this dialogue will download the file to your phone for offline reading.
      </Dialog>
      {this.state.books.map((book, i)=>{
        return <div key={i}>
          <Card className="book-card" initiallyExpanded={false}>
            <CardMedia>
              <img src="/assets/cover.jpg"/>
            </CardMedia>
            <CardHeader
              title={book.title}
              subtitle={book.author}
              avatar={<Avatar style={{color:'red'}}>{book.title.substr(0,1)}</Avatar>}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              {book.description}
            </CardText>
            <CardActions expandable={true}>
              <Link to="book" params={{link: book.link}}>
              <FlatButton label="View Details" secondary={true} /></Link>
              {book.resources.book.map((book, i)=>{
                return <FlatButton label={"Download "+book.format} primary={true} onTouchTap={this._downloadDialog.bind(this, book.link)}/>
              })}
            </CardActions>
          </Card>
        </div>;
      })}
    </div>;
  }
});
