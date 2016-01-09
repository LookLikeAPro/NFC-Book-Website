import React from "react";
import {Link} from "react-router";
import {RaisedButton, Avatar, Dialog} from "material-ui";
import Card from "material-ui/lib/card/card";
import CardActions from "material-ui/lib/card/card-actions";
import CardHeader from "material-ui/lib/card/card-header";
import CardMedia from "material-ui/lib/card/card-media";
import CardTitle from "material-ui/lib/card/card-title";
import FlatButton from "material-ui/lib/flat-button";
import CardText from "material-ui/lib/card/card-text";


module.exports = React.createClass({
	contextTypes: {
		books: React.PropTypes.array.isRequired
	},
	getInitialState () {
		return {
			books: this.context.books
		};
	},
	render () {
		return <div className='homePage pageContent'>
			{this.state.books.map((book, i)=>{
				return <div key={i}>
					<Card className="book-card" initiallyExpanded={false}>
						<Link to={`/book/${book.link}`}>
						<CardMedia>
							<img src="/assets/cover.jpg"/>
						</CardMedia>
						</Link>
						<CardHeader title={book.title} subtitle={book.author} avatar={<Avatar style={{color:'red'}}>{book.title.substr(0,1)}</Avatar>} actAsExpander={true} showExpandableButton={true}>
						</CardHeader>
						<CardText expandable={true}>
							{book.description}
						</CardText>
						<CardActions expandable={true}>
							<Link to={`/book/${book.link}`}>
								<RaisedButton primary={true} label="View Details"/>
							</Link>
						</CardActions>
					</Card>
				</div>;
			})}
			<div>
				<Card className="book-card">
					<CardText>
						<h3>More books coming soon</h3>
					</CardText>
				</Card>
			</div>
		</div>;
	}
});
