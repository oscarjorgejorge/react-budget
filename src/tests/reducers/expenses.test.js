import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add expense to expense list", () => {
  const expense = {
    id: "5",
    description: "Gas Bill",
    note: "",
    amount: 3000,
    createdAt: 30000,
  };

  const action = {
    type: "ADD_EXPENSE",
    expense,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense by id", () => {
  const note = "This is a new note";

  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { note },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toEqual(note);
});

test("should not edit expense if id not found", () => {
  const updates = {
    description: "House Rent",
    note: "This is a new note",
    amount: 129500,
  };

  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      updates,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2], expenses[3]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]],
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
