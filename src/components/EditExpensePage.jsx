import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.jsx';
import {
  editExpense,
  removeExpense
} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onClick = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        {/* FIXME: Refreshing on the page causes the app to crash with the line below */}
        {/* <h1>Edit Expense for {this.props.expense.description}</h1> */}
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onClick}
        >
          Remove
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: data => dispatch(removeExpense(data))
});

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
