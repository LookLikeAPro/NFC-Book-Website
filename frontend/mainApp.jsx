import React, {PropTypes} from "react";
import {Router} from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import routes from "routes";

import {Provider} from "mobx-react";
import publicationStore from "stores/publicationStore";
export default class SDA extends React.Component {
	static propTypes = {
		history: PropTypes.object.isRequired
	};
	render() {
		const {history} = this.props;
		return (<MuiThemeProvider muiTheme={getMuiTheme()}>
				<Provider publicationStore={publicationStore}>
					<Router history={history}>
						{routes}
					</Router>
				</Provider>
			</MuiThemeProvider>);
	}
}
