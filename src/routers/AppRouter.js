import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import EditExpensePage from "../components/EditExpensePage";
import HelpExpensePage from "../components/HelpExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import LoginPage from "../components/LoginPage";
import NotFoundExpensePage from "../components/NotFoundExpensePage";
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundExpensePage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
