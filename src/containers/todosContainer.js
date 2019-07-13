import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { fetchTodos } from '../actions/todosAction';
import AddTodo from '../components/AddTodo';
import InProgress from '../components/InProgress';
import Done from '../components/Done';
import Badge from '../components/Badge';

import PropTypes from 'prop-types';

export class todosContainer extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const todos = this.props.todos;
    return (
      <>
        <AddTodo />
        <div className='d-flex justify-content-end'>
          <Badge title='Tasks' num={todos.length} />
        </div>
        <div className='card-deck mt-1'>
          <TodoList todos={todos} />
          <InProgress todos={todos} />
          <Done todos={todos} />
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todoReducer.cards,
  fetchTodos: PropTypes.func.isRequired
});

todosContainer.propTypes = {
  todos: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  { fetchTodos }
)(todosContainer);
