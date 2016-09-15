import React, {Component, PropTypes} from "react";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DebugWarningBar from "components/DebugWarningBar";
import styles from "./Application.scss";
import {Link} from "react-router";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Application extends Component {
	static propTypes = {
		dispatch: PropTypes.func,
		children: PropTypes.object,
		currentUser: PropTypes.object,
		location: PropTypes.object
	};
	state = {
		drawerOpen: false
	}
	toggleDrawer = () => this.setState({drawerOpen: !this.state.open});
	closeDrawer = () => this.setState({drawerOpen: false});
	render() {
		return (<div className={styles.appContainer}>
			<Drawer docked={false} open={this.state.drawerOpen} onRequestChange={(drawerOpen) => this.setState({drawerOpen})}>
				<Link to={"/"}><MenuItem onTouchTap={this.closeDrawer}>Books</MenuItem></Link>
				<Link to={"about"}><MenuItem onTouchTap={this.closeDrawer}>About</MenuItem></Link>
			</Drawer>
			<DebugWarningBar />
			<NavBar className={styles.navBarFlex} toggleDrawer={this.toggleDrawer} />
			<div className={styles.contentFlex}>{this.props.children}</div>
			<Footer />
		</div>);
	}
}

export default Application;
