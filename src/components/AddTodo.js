import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../actions/todosAction';

export class AddTodo extends Component {
  state = {
    text: ''
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodos(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form className='form-inline' onSubmit={this.onSubmit}>
          <label>
            <strong>Add Task</strong>
          </label>
          <input
            type='text'
            className='form-control mx-sm-3'
            value={this.state.text}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodos }
)(AddTodo);
