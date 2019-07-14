import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

import AddTodo from '../components/AddTodo';

import Badge from '../components/Badge';

import DBData from '../data/db.json';
import * as actions from '../actions/index';



export class todosContainer extends Component {
  componentDidMount() {
    this.props.onReadDataFromJson(DBData[0].cards);
  }

  render() {
    const { DbData } = this.props;

    let toToData = DbData.filter(data => {
      return data.status === 0;
    });

    let inProgress = DbData.filter(data => {
      return data.status === 1;
    });

    let done = DbData.filter(data => {
      return data.status === 2;
    });

    return (
      <>
      <AddTodo toToData={toToData} DbData={DbData} {...this.props}/>
        <div className="d-flex justify-content-end">
          <Badge title="Tasks" num={DbData.length} />
        </div>
        <div className="card-deck mt-1">
          <TodoList {...this.props}  id ="todoID" data={toToData} />
          <TodoList {...this.props} id ="progressID"  data={inProgress} />
          <TodoList {...this.props} id ="DoneID"  data={done} />
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  DbData: state.todoReducer.cards
  // fetchTodos: PropTypes.func.isRequired
});

const mapDispatchToProps = dispatch => ({
  onReadDataFromJson: data => dispatch(actions.addTodos(data)),
  onAdding : (text,id,status,order) => dispatch(actions.add(text,id,status,order)),
  onChangeTarget : (text,id,status,order,elementId) => dispatch(actions.changeTarget(text,id,status,order,elementId))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todosContainer);
