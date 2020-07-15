/* =============== Dependencies ============= */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* ================= Components ================= */

import LibraryPage from "../components/pages/LibraryPage";
import NotFoundPage from "../components/pages/NotFoundPage";

/* =============== Code  ================== */
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LibraryPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
