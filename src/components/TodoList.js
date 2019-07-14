import React from 'react';
import Badge from './Badge';

var selected;

class TodoList extends React.Component {
  allowsDrop(event) {
    event.preventDefault();
  }

  isBefore = (el1, el2) => {
    let cur;
    if (el2.parentNode === el1.parentNode) {

      console.log(cur,"cur");
      
      for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
        console.log(cur,"cur2");


        if (cur === el2) return true;
      }
    } else return false;
  };
  dragOver = e => {
    
  };
  dragStart = (e, data) => {
    selected = e.target;
  
    if (this.isBefore(selected, e.target)) {
      e.target.parentNode.insertBefore(selected, e.target);
    } else {
      e.target.parentNode.insertBefore(selected, e.target.nextSibling);
    }
    console.log(selected,"selected");
    
    var dataToTransfer = JSON.stringify(data);
    e.dataTransfer.setData('object', dataToTransfer);
   
  };

  dragEnd = () => {
    selected = null;
  };

  drop = event => {
    event.preventDefault();

    const data11 = event.dataTransfer.getData('object');

    let realData = JSON.parse(data11);

    let text = realData.text;
    let id = realData.id;
    let status = realData.status;
    let order = realData.order;

    this.props.onChangeTarget(text, id, status, order, event.currentTarget.id);
  };
  render() {
    let todoNum = 0;

    let data = null;
    if (this.props.data) {

   
      
      data = this.props.data;
      todoNum = this.props.data.length;
    }

    return (
      <div id={this.props.id} className="card">
        <div className="card-header alert-dark d-flex justify-content-between align-items-center ">
          ToDos
          <Badge title="Tasks" num={todoNum} />
        </div>

        <ul
          style={{ height: '100%' }}
          id={this.props.id}
          onDragOver={this.allowsDrop}
          onDrop={this.drop}
        >
          {data
            ? data.map(todo => {
                return (
          
                  <li
                    id={todo.id}
                    onDragEnd={this.dragEnd}
                    // onDragOver={this.dragOver}
                    draggable={true}
                    onDragStart={event => this.dragStart(event, todo)}
                    key={todo.id}
                  >
                    {todo.text}
                  </li>
                
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

export default TodoList;
