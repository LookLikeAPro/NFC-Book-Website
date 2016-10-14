import React, {Component, PropTypes} from "react";

import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Row from "elemental/lib/components/Row";
import Col from "elemental/lib/components/Col";

import styles from "./CreditsPage.scss";

export default class CreditsPage extends Component {
	render() {
		return (<Row>
			<Col md="2/12"/>
			<Col md="8/12">
			<h1>Credits</h1>
			<List>
				<Subheader>The project acknowledges the instrumental music by the following artists:</Subheader>
				<ListItem primaryText="I hope you dance by LeeAnn Womack" />
				<ListItem primaryText="I’ve got a feeling by Black Eyed Peas" />
				<ListItem primaryText="Don’t Stop Believing by Journey" />
				<ListItem primaryText="Change the World by Johnny Reid" />
				<ListItem primaryText="Blessed by Martina Mc Bride" />
				<ListItem primaryText="Enya" />
			</List>
			</Col>
		</Row>);
	}
}
