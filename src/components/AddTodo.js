import React, { Component } from 'react';


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

    this.props.onAdding(
      this.state.text,//text
      this.props.DbData.length + 1,//id
      0,//status
      this.props.toToData.length + 1//order
    );
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.onSubmit}>
          <label>
            <strong>Add Task</strong>
          </label>
          <input
            type="text"
            className="form-control mx-sm-3"
            value={this.state.text}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
