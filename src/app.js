import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 300, createdAt: -1000 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 822, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 147, createdAt: 15200 })
);

const state = store.getState();
console.log(state);

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
// getVisibleExpenses(store.expenses, store.filter);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
