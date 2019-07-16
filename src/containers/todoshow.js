import React, { Component } from 'react';


class TodoShow extends Component {
  render() {
    // debugger
    const todo = this.props.todos[this.props.match.params.id]
    return(
      <div>
        <ul>
          <h3>{todo.content}</h3>
          <p>{todo.completed ? 'Great job checking stuff off!' : 'You need to take care of this'}</p>
        </ul>
      </div>
    )
  }
}

export default TodoShow;