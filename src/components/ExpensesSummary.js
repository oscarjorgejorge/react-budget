import React from "react";
import { connect } from "react-redux";
import expenseTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  // console.log(expenseCount);
  // console.log(expensesTotal);

  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  return (
    <div>
      <p>
        Viewing {expenseCount} {expenseWord}
        {` totalling ${formattedExpensesTotal}`}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: expenseTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
