import React, {Component, PropTypes} from "react";
import {connect} from "react-refetch";

import Row from "elemental/lib/components/Row";
import Col from "elemental/lib/components/Col";

import Paginate from "components/Paginate";
import CircularProgress from "material-ui/CircularProgress";
import {Link} from "react-router";

class VendorItem extends Component {
	static propTypes = {
		vendor: PropTypes.object
	};
	render() {
		const {vendor} = this.props;
		return (<div className="item">
				<div className="ui tiny image">
					<img src="/static/assets/wireframe.png" />
				</div>
				<div className="content">
					<Link to={`/vendors/${vendor.slug}`}><div className="header">{vendor.name}</div></Link>
					<div className="meta">
						<span>{vendor.locality || vendor.administrativeAreaLevel_2}</span>
					</div>
					<div className="meta">
						<span>{vendor.administrativeAreaLevel_1}, {vendor.country}</span>
					</div>
				</div>
			</div>);
	}
}

class SearchPage extends Component {
	static propTypes = {
		resultsFetch: PropTypes.object,
		location: PropTypes.object
	};
	static contextTypes = {
		router: PropTypes.object
	}
	handlePageClick = (data) => {
		this.context.router.push({
			pathname: this.props.location.pathname,
			query: {
				page: data.selected+1,
				term: this.props.location.query.term
			}
		});
	}
	render() {
		const {resultsFetch, location} = this.props;
		const page = parseInt(location.query.page)-1 || 0;
		var totalPages = 0;
		return (<div className="ui segment" style={{flex: "1 1 auto"}}>
			<Row>
				<Col sm="1/12" />
				<Col sm="10/12" style={{margin: "20px 0px"}}>
					{(()=>{
						if (resultsFetch.pending) {
							return <CircularProgress style={{margin: "auto", display: "block"}} />;
						}
						else if (resultsFetch.fulfilled) {
							if (resultsFetch.value.count === 0) {
								return (<div className="ui error icon message">
									<div className="content">
										<div className="header">The search for "{location.query.term}" yielded 0 results.</div>
										<p>Consider choosing other keywords.</p>
									</div>
								</div>);
							}
							totalPages = Math.floor(resultsFetch.value.count/20);
							return (<div>
									<div className="ui items">
										{resultsFetch.value.results.map((result, index)=>{
											if (result.type === "Vendor") {
												return <VendorItem key={index} vendor={result}/>;
											}
											else if (result.type === "AdministrativeAreaLevel1") {
												return <p>{result.name}</p>;
											}
										})}
									</div>
									<div style={{marginTop: "50px"}}>
										<Paginate pageNum={totalPages} initialSelected={page} clickCallback={this.handlePageClick} />
									</div>
								</div>);
						}
						else if (resultsFetch.rejected) {
							return (<div className="ui error icon message">
									<div className="content">
										<div className="header">A problem has occurred</div>
										<p>Your search was unsuccessful</p>
									</div>
								</div>);
						}
					})()}
				</Col>
				<Col sm="1/12" />
			</Row>
		</div>);
	}
}
export default connect(props => ({
	resultsFetch: `/api/search?term=${props.location.query.term}&page=${props.location.query.page || 1}`
}))(SearchPage);
