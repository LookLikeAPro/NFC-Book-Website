import React, {Component, PropTypes} from "react";
import {observer, inject} from "mobx-react";

import Row from "elemental/lib/components/Row";
import Col from "elemental/lib/components/Col";
import CircularProgress from "material-ui/CircularProgress";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import PublicationCard from "components/PublicationCard";

@inject("publicationStore") @observer export default class PublicationList extends Component {
	static propTypes = {
		publicationStore: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired
	};
	componentWillMount() {
		const page = this.props.location.query.page || 1;
		this.props.publicationStore.getPage(page);
	}
	render() {
		const page = this.props.location.query.page || 1;
		const {pagination} = this.props.publicationStore;
		return (<Row>
			<Col md="2/12"/>
			<Col md="8/12">
			<Row>
			{pagination.has(page)? pagination.get(page).map((publication, i)=> {
				return (<Col key={i} md="4/12" sm="6/12" style={{marginTop: "10px", marginBottom: "10px"}}><PublicationCard publication={publication} /></Col>);
			}): <div style={{textAlign: "center", width: "100%"}}><CircularProgress /></div>}
			</Row>
			<div>
				<Card className="book-card">
					<CardText>
						<h3>Main book catalog coming soon.</h3>
					</CardText>
				</Card>
			</div>
			</Col>
		</Row>);
	}
}
