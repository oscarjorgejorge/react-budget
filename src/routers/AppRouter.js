import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import EditExpensePage from "../components/EditExpensePage";
import HelpExpensePage from "../components/HelpExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import Header from "../components/HeaderPage";
import NotFoundExpensePage from "../components/NotFoundExpensePage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundExpensePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
