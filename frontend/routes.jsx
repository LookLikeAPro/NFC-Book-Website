import React from "react";
import {Route, IndexRoute, Redirect, IndexRedirect} from "react-router";

import Application from "containers/Application";
import PublicationDetail from "containers/PublicationDetail";
import PublicationList from "containers/PublicationList";
import AboutPage from "containers/AboutPage";
import CreditsPage from "containers/CreditsPage";
import NotFoundPage from "containers/NotFoundPage";

import WelcomePage from "containers/WelcomePage";

const routes = (<Route>
			<Route component={Application}>
				<Route path="welcome" component={WelcomePage} />
				<Route path="books/:id" component={PublicationDetail} />
				<Route path="books" component={PublicationList} />
				<Route path="about" component={AboutPage} />
				<Route path="credits" component={CreditsPage} />
			</Route>
			<Redirect from="/" to="books" />
			<Route path="*" component={NotFoundPage}/>
		</Route>);

export default routes;
