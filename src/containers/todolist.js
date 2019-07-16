import React, { Component } from 'react';
import ToDo from '../components/todo'

class TodoList extends Component {
  render() {
    console.log(this.props.todos)
    // let list = this.props.todos.map((props, index) => {
    //   return (
    //     <li>
    //       content: {props.content}<br />
    //       completed: {props.completed ? 'yes' : 'no'}
    //     </li>
    //   )
    // })

    // let list = this.props.todos.map(ToDo)

    let list = this.props.todos.map((todo, idx) => <ToDo key={idx+1} content={todo.content} completed={todo.completed} index={idx}/>)

    return(
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default TodoList;


