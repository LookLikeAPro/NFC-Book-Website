import React from "react";
import {Link} from "react-router";
import {RaisedButton, Card, CardHeader, CardText, CardActions, CardMedia, Avatar, Dialog} from "material-ui";

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
		window.location = this.link;
		this.refs.confirmDownload.dismiss();
	},
	_downloadDialog (link) {
		this.link = link;
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
						<Link to="book" params={{link: book.link}}>
						<CardMedia>
							<img src="/assets/cover.jpg"/>
						</CardMedia>
						</Link>
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
								<RaisedButton primary={true} label="View Details"/>
							</Link>
						</CardActions>
					</Card>
				</div>;
			})}
			<div>
				<Card className="book-card" initiallyExpanded={false}>
					<CardText>
						<h3>More books coming soon</h3>
					</CardText>
				</Card>
			</div>
		</div>;
	}
});
