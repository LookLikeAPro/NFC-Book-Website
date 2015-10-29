'use strict';

import React from "react";
import {Link} from "react-router";
import {RaisedButton, FontIcon, Snackbar, Card, CardTitle, CardText, CardActions, Tabs, Tab, List, ListItem, Dialog} from "material-ui";

// <RaisedButton label='Ty Me!' primary={true} onTouchTap={this._handleClick} />
//       <Snackbar ref='snackbar' message={'You did it!'} />

module.exports = React.createClass({
	contextTypes: {
		books: React.PropTypes.array.isRequired
	},
	getInitialState () {
		var link = this.props.params.link;
		var books = this.context.books;
		return {
			book: function(){
				for (var book of books) {
					if (link === book.link) {
						return book;
					}
				}
			}()
		};
	},
	_playAudiobook (index) {
		for (var i = 0; i<this.state.book.resources.audiobook.length; i++) {
			if (i !== index) {
				var audioNode = React.findDOMNode(this.refs[this.state.book.resources.audiobook[i].link])
				audioNode.pause();
				audioNode.currentTime = 0;
			}
		}
		var audioNode = React.findDOMNode(this.refs[this.state.book.resources.audiobook[index].link]);
		if (audioNode.paused) {
			audioNode.play();
		} else {
			audioNode.pause();
		}
		this.getInitialState();
	},
	_playInterview (index) {
		for (var i = 0; i<this.state.book.resources.interview.length; i++) {
			if (i !== index) {
				var audioNode = React.findDOMNode(this.refs[this.state.book.resources.interview[i].link])
				audioNode.pause();
				audioNode.currentTime = 0;
			}
		}
		var audioNode = React.findDOMNode(this.refs[this.state.book.resources.interview[index].link]);
		if (audioNode.paused) {
			audioNode.play();
		} else {
			audioNode.pause();
		}
		this.getInitialState();
	},
	_onDialogSubmit () {
		window.location = this.link;
		this.refs.confirmDownload.dismiss();
	},
	_downloadDialog (link) {
		this.link = link;
		this.refs.confirmDownload.show();
	},
	render () {
		if (!this.state.book) {
			return <div className='pageContent'>
				<h3>Error - There is no such book.</h3>
			</div>
		}
		var dialogActions = [
			{ text: 'Cancel' },
			{ text: 'Confirm', ref: 'submit', onTouchTap: this._onDialogSubmit}
		];
		return <div className='pageContent'>
			<Dialog ref="confirmDownload" title="Starting Download" actions={dialogActions} actionFocus="submit">
				Confirming this dialogue will download the file to your phone for offline reading.
			</Dialog>
			<Card className="book-card">
				<CardTitle title={this.state.book.title} subtitle={this.state.book.author}/>
				<CardText>
					{this.state.book.description}
				</CardText>
				<CardActions>
					{this.state.book.resources.book.map((book, i)=>{
						return <RaisedButton label={"Download "+book.format} primary={true} onTouchTap={this._downloadDialog.bind(this, book.link)} />
					})}
				</CardActions>
				<Tabs> 
					<Tab label="Audiobook" > 
						<List>
							{this.state.book.resources.audiobook.map((chapter, i)=>{
								return <div key={i}>
										<ListItem primaryText={chapter.name} onClick={this._playAudiobook.bind(this, i)} />
										<audio ref={chapter.link} src={chapter.link}></audio>
									</div>
							})}
						</List>
					</Tab> 
					<Tab label="Interviews" > 
						<List>
							{this.state.book.resources.interview.map((chapter, i)=>{
								return <div key={i}>
										<ListItem primaryText={chapter.name} onClick={this._playInterview.bind(this, i)} />
										<audio ref={chapter.link} src={chapter.link}></audio>
									</div>
							})}
						</List>
					</Tab>
				</Tabs>
			</Card>
		</div>;
	},

	_handleClick: function() {
		this.refs.snackbar.show();
	}
});
