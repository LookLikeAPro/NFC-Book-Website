import React, {Component, PropTypes} from "react";
import {observer, inject} from "mobx-react";

import Row from "elemental/lib/components/Row";
import Col from "elemental/lib/components/Col";
import CircularProgress from "material-ui/CircularProgress";

import PublicationCard from "components/PublicationCard";
import Paginate from "components/Paginate";

@inject("publicationStore") @observer export default class PublicationList extends Component {
	static propTypes = {
		publicationStore: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired
	};
	static contextTypes = {
		router: PropTypes.object
	}
	componentWillMount() {
	}
	handlePageClick = (data) => {
		this.props.publicationStore.getPage(data.selected+1);
		this.context.router.push({
			pathname: this.props.location.pathname,
			query: {
				page: data.selected+1
			}
		});
	}
	render() {
		const page = parseInt(this.props.location.query.page) || 1;
		const {pagination, pages} = this.props.publicationStore;
		return (<Row>
			<Col md="2/12"/>
			<Col md="8/12">
			<Row>
			{pagination.has(page)? pagination.get(page).map((publication, i)=> {
				return (<Col key={i} md="4/12" sm="6/12" style={{marginTop: "10px", marginBottom: "10px"}}><PublicationCard publication={publication} /></Col>);
			}): <div style={{textAlign: "center", width: "100%"}}><CircularProgress /></div>}
			</Row>
			<div>
				<Paginate pageNum={pages} initialSelected={page-1} clickCallback={this.handlePageClick} />
			</div>
			</Col>
		</Row>);
	}
}
