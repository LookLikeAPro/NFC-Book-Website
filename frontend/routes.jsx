import React from "react";
import {Route, IndexRoute, Redirect, IndexRedirect} from "react-router";

import Application from "containers/Application";
import PublicationDetail from "containers/PublicationDetail";
import PublicationList from "containers/PublicationList";
import AboutPage from "containers/AboutPage";
import NotFoundPage from "containers/NotFoundPage";

import WelcomePage from "containers/WelcomePage";

const routes = (<Route>
			<Route path="/" component={Application}>
				<Route path="welcome" component={WelcomePage} />
				<IndexRedirect to="/publications" />
				<Route path="publications/:id" component={PublicationDetail} />
				<Route path="publications" component={PublicationList} />
				<Route path="about" component={AboutPage} />
			</Route>
			<Route path="*" component={NotFoundPage}/>
		</Route>);

export default routes;
