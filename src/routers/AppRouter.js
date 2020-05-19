/* ===== App Dependencies ===== */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* ===== Styles and Components ===== */

import PersonalDigitalLibraryApp from "./../components/PersonalDigitalLibraryApp";
import NotFoundPage from "./../components/NotFoundPage";


/* ===== Code for the App ====== */
const AppRouter = () => (<BrowserRouter>
	<div>
	<Switch>
		<Route path="/" component={PersonalDigitalLibraryApp} exact={true} />
		<Route component={NotFoundPage} />
	</Switch>
	</div>
</BrowserRouter>);

export default AppRouter;