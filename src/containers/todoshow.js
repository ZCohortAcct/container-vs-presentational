import React, { Component } from 'react';
import ToDo from '../components/todo'

class TodoShow extends Component {
  render() {
    const todo = this.props.todos
    // debugger
    return(
      <div>
        <ul>
          <ToDo content={todo.content} completed={todo.completed} />
          <p><b>{todo.completed ? 'Great job checking stuff off!' : 'You need to take care of this'}</b></p>
        </ul>
      </div>
    )
  }
}

export default TodoShow;