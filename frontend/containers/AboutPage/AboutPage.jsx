import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Row from "elemental/lib/components/Row";
import Col from "elemental/lib/components/Col";

import styles from "./AboutPage.scss";

export default class AboutPage extends Component {
	render() {
		return (<Row>
			<Col md="2/12"/>
			<Col md="8/12">
			<h1>About</h1>
			<p>The NFC SmartBook Project is a pilot project at Renison University College incorporates NFC technology with ebooks to create a mobile e-library browsing experience.</p>
			<p>By attaching a NFC card to a library book, one can tap the book with a NFC enabled device to conveniently browse online resources related to the book. In the case of Deborah DeJong's book <Link to={`/books/d-a-n-c-e-five-steps-to-living-your-best-life`}>D.A.N.C.E.: five steps to Living Your Best Life</Link>, the mobile friendly site provides information about the book, digital reading options, and exclusive interviews with fans.</p>
			<h3>Results</h3>
			<p>The project has received mention on the book <a href="http://www.amazon.ca/Near-Field-Communication-Developments-Implications/dp/1627054324/ref=sr_1_2?ie=UTF8&qid=1420646410&sr=8-2&keywords=Near+Field%3A+recent+development">Near Field Communication: Recent Developments and Library Implications</a>.</p>
			<h3>Contributors</h3>
			<List>
				<ListItem><b>Project Director:</b> Tony Tin</ListItem>
				<ListItem><b>Project Lead:</b> Jerry Zhou</ListItem>
				<ListItem><b>Author:</b> Deborah DeJong</ListItem>
				<ListItem><b>Content Creator:</b> Brendan Leung</ListItem>
			</List>
			<List>
				<Subheader>Pilot Members</Subheader>
				<ListItem primaryText="Carrie Wang" />
				<ListItem primaryText="Han Wang" />
				<ListItem primaryText="Vivi Ma" />
				<ListItem primaryText="Linda Yan" />
			</List>
			<p>Deborah DeJong inspires everyone whose life she touches. She invites the reader to live their best life everyday! DeJong demonstrates through her five step model, that happiness and peace are available to everyone if they choose to DANCE.</p>
			<h3>Contact</h3>
			<List>
				<ListItem primaryText="Email" secondaryText="tony.tin@uwaterloo.ca" />
			</List>
			</Col>
		</Row>);
	}
}
