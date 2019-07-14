import React from 'react';
import Badge from './Badge';

class TodoList extends React.Component {
  render() {
    let todoNum = 0;
    let { data } = this.props;
    if (data) {
      todoNum = data.length;
    }

    return (
      <div id={this.props.id} className="card">
        <div className="card-header alert-dark d-flex justify-content-between align-items-center ">
          {this.props.name}
          <Badge title="Tasks" num={todoNum} />
        </div>

        <ul
          style={{ height: '100%' }}
          id={this.props.id}
          onDragOver={this.props.allowsDrop}
          onDrop={this.props.drop}
        >
          {data
            ? data.map(todo => {
                return (
                  <div
                    style={{ display: 'flex' }}
                    key={todo.id}
                    id={todo.id}
                    draggable={true}
                    onDragStart={event => this.props.dragStart(event, todo)}
                    onDragOver={this.props.dragOver}
                    onDragEnd={this.props.dragEnd}
                  >
                    <li>{todo.text}</li>
                    <span onClick={()=>this.props.deleteHandler(todo)}> <button>delete</button></span>
                  </div>
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

export default TodoList;
