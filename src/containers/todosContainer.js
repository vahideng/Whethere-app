import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lists from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import Badge from '../components/Badge';
import * as actions from '../actions/index';

var selected;
export class todosContainer extends Component {
  componentDidMount() {
    this.props.onReadDataFromJson();
  }

  dragStart = (event, data) => {// start dragging

    event.dataTransfer.effectAllowed = 'move';
    selected = event.target;// selected item
    let dataToTransfer = JSON.stringify(data);
    event.dataTransfer.setData('object', dataToTransfer);    
  };

  allowsDrop(event) {
    event.preventDefault();
  }
  
  dragEnd = () => {
    selected = null;
  };

  drop = event => {
    event.preventDefault();
    const deraggedData = event.dataTransfer.getData('object');
    let realData = JSON.parse(deraggedData);  
    let text = realData.text;
    let id = realData.id;
    let status = realData.status;
    let order = realData.order;  
    this.props.onChangeTarget(text, id, status, order, event.currentTarget.id);
  };

  dragOver = event => {  //dropover <li>

    if (this.isBefore(selected, event.target))
    event.target.parentNode.insertBefore(selected, event.target);
    else if (selected.parentNode.id === event.target.parentNode.id)
    event.target.parentNode.insertBefore(selected, event.target.nextSibling);
  };

  isBefore = (element1, element2) => {
    let current;
    if (element2.parentNode === element1.parentNode) {
      for (current = element1.previousSibling; current; current = current.previousSibling) {
        if (current === element2) return true;
      }
    } else return false;
  };

  deleteHandler= (todo)=>{
    console.log(todo,"id");
    

this.props.OnDeleteData(todo.id)
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
        <AddTodo toToData={toToData} DbData={DbData} {...this.props} />
        <div className="d-flex justify-content-end">
          <Badge title="Tasks" num={DbData.length} />
        </div>
        <div className="card-deck mt-1">
          <Lists
            name="To Do"
            onChangeTarget={this.props.onChangeTarget}
            id="todoID"
            data={toToData}
            allowsDrop={this.allowsDrop}
            isBefore={this.isBefore}
            dragOver={this.dragOver}
            dragStart={this.dragStart}
            dragEnd={this.dragEnd}
            drop={this.drop}
            deleteHandler={this.deleteHandler}
          />
          <Lists
            name="In Progress"
            onChangeTarget={this.props.onChangeTarget}
            id="progressID"
            data={inProgress}
            allowsDrop={this.allowsDrop}
            isBefore={this.isBefore}
            dragOver={this.dragOver}
            dragStart={this.dragStart}
            dragEnd={this.dragEnd}
            drop={this.drop}
            deleteHandler={this.deleteHandler}
          />
          <Lists
            name="Done"
            onChangeTarget={this.props.onChangeTarget}
            id="DoneID"
            data={done}
            allowsDrop={this.allowsDrop}
            isBefore={this.isBefore}
            dragOver={this.dragOver}
            dragStart={this.dragStart}
            dragEnd={this.dragEnd}
            drop={this.drop}
            deleteHandler={this.deleteHandler}
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  DbData: state.todoReducer.cards
});

const mapDispatchToProps = dispatch => ({
  onReadDataFromJson: () => dispatch(actions.fetchData()),
  onAdding: (text, id, status, order) =>
    dispatch(actions.add(text, id, status, order)),
  onChangeTarget: (text, id, status, order, elementId) =>
    dispatch(actions.changeTarget(text, id, status, order, elementId)),
    OnDeleteData :(id)=> dispatch(actions.deleteData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todosContainer);
