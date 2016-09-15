import React, {Component, PropTypes} from "react";
import IconButton from "material-ui/IconButton";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";

import styles from "./NavBar.scss";

import AppBar from "material-ui/AppBar";

export default class NavBar extends Component {
	static propTypes = {
		toggleDrawer: PropTypes.func.isRequired
	};
	componentDidMount() {
	}
	componentWillUnmount() {
	}
	render() {
		return (
			<AppBar title="Book Catalog" iconElementLeft={<IconButton onTouchTap={this.props.toggleDrawer}><NavigationMenu /></IconButton>} />
		);
	}
}
