import React, {Component} from "react";
import ReactPaginate from "react-paginate";
import "./Paginate.scss";

export default class Paginate extends Component {
	render() {
		return (<ReactPaginate previousLabel={"previous"}
			nextLabel={"next"}
			breakLabel={<a href="">...</a>}
			marginPagesDisplayed={1}
			pageRangeDisplayed={7}
			containerClassName={"pagination"}
			previousClassName={"previous"}
			nextClassName={"next"}
			subContainerClassName={"pages pagination"}
			activeClassName={"active"} {...this.props} />);
	}
}
