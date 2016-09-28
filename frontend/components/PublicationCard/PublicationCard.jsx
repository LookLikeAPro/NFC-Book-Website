import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {RaisedButton, Avatar, Dialog} from "material-ui";

import styles from "./PublicationCard.scss";

export default class PublicationCard extends Component {
	static propTypes = {
		publication: PropTypes.object.isRequired
	}
	render() {
		const {publication} = this.props;
		return (<Card className="book-card" initiallyExpanded={false}>
			{publication.picture!=="/images/missing.png"? <Link to={`/books/${publication.id}`}>
			<CardMedia>
				<img src={publication.picture}/>
			</CardMedia>
			</Link>: false}
			<CardHeader title={publication.title} subtitle={publication.author} actAsExpander={false} showExpandableButton={false}>
			</CardHeader>
		</Card>);
	}
}
