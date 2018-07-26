import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add expense', () => {
  const expense = {
    id: '4',
    description: 'Coffee',
    note: '',
    amount: 285,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([
    ...expenses,
    action.expense
  ]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([
    expenses[0],
    expenses[2]
  ]);
});

test('should note remove expenses if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
  const note = 'I added a new note for gum!';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe(note);
});

test('should not edit expense if id not found', () => {
  const note = 'I added a new note for gum!';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
