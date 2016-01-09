import React, {Component} from "react";
import {RaisedButton, Tabs, Tab, List, ListItem} from "material-ui";
import Card from "material-ui/lib/card/card";
import CardActions from "material-ui/lib/card/card-actions";
import CardTitle from "material-ui/lib/card/card-title";
import FlatButton from "material-ui/lib/flat-button";
import CardText from "material-ui/lib/card/card-text";
import Dialog from "material-ui/lib/dialog";

export default class ItemDetail extends Component {
	static contextTypes = {
		books: React.PropTypes.array.isRequired
	};
	state = {
		downloadDialogOpen: false
	};
	_playAudiobook (book, index) {
		for (var i = 0; i<book.resources.audiobook.length; i++) {
			if (i !== index) {
				var audioNode = this.refs[book.resources.audiobook[i].link];
				audioNode.pause();
				audioNode.currentTime = 0;
			}
		}
		var audioNode = this.refs[book.resources.audiobook[index].link];
		if (audioNode.paused) {
			audioNode.play();
		} else {
			audioNode.pause();
		}
	}
	_playInterview (book, index) {
		for (var i = 0; i<book.resources.interview.length; i++) {
			if (i !== index) {
				var audioNode = this.refs[book.resources.interview[i].link];
				audioNode.pause();
				audioNode.currentTime = 0;
			}
		}
		var audioNode = this.refs[book.resources.interview[index].link];
		if (audioNode.paused) {
			audioNode.play();
		} else {
			audioNode.pause();
		}
	}
	openDialog(link) {
		this.setState({downloadDialogOpen:true, link:link})
	}
	closeDialog() {
		this.setState({downloadDialogOpen:false})
	}
	confirmDownload () {
		window.location = this.state.link;
	}
	render () {
		var link = this.props.params.link;
		var books = this.context.books;
		var book = function(){
				for (var book of books) {
					if (link === book.link) {
						return book;
					}
				}
			}()
		if (!book) {
			return <div className='pageContent'>
				<h3>Error - There is no such book.</h3>
			</div>
		}
		const dialogActions = [
			<FlatButton label="Cancel" secondary={true} onTouchTap={::this.closeDialog} />,
			<FlatButton label="Confirm" onTouchTap={::this.confirmDownload} />
		];
		return <div className='pageContent'>
			<Dialog title="Starting Download" actions={dialogActions} modal={false} open={this.state.downloadDialogOpen} onRequestClose={::this.closeDialog}>
          Confirming this dialogue will download the file to your phone for offline reading.
      </Dialog>
			<Card className="book-card">
				<CardTitle title={book.title} subtitle={book.author}/>
				<CardText>
					{book.description}
				</CardText>
				<CardActions>
					{book.resources.book.map((book, i)=>{
						return <RaisedButton label={"Download "+book.format} primary={true} onTouchTap={this.openDialog.bind(this, book.link)} />
					})}
				</CardActions>
				<Tabs> 
					<Tab label="Audiobook" > 
						<List>
							{book.resources.audiobook.map((chapter, i)=>{
								return <div key={i}>
										<ListItem primaryText={chapter.name} onTouchTap={this._playAudiobook.bind(this, book, i)} />
										<audio ref={chapter.link} src={chapter.link}></audio>
									</div>
							})}
						</List>
					</Tab> 
					<Tab label="Interviews" > 
						<List>
							{book.resources.interview.map((chapter, i)=>{
								return <div key={i}>
										<ListItem primaryText={chapter.name} onTouchTap={this._playInterview.bind(this, book, i)} />
										<audio ref={chapter.link} src={chapter.link}></audio>
									</div>
							})}
						</List>
					</Tab>
				</Tabs>
			</Card>
		</div>;
	}
}
