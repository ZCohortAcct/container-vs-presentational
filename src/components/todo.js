// import React, { Component } from 'react';
import React from 'react';

// deconsturcting: content = props.content
// const Todo = ({content, completed}, index) => {
// const Todo = (props, index) => {
//   // const { content, completed } = props
//   return (
//     <li>
//       content: {content}<br />
//       completed: {completed ? 'yes' : 'no'}
//     </li>
//   )
// }


const Todo = (props, index) => {
  return (
    <li>
      content: {props.content}<br />
      completed: {props.completed ? 'yes' : 'no'}
    </li>
  )
}

// class Todo extends Component {
//   render() {
//     return (
//       <li>
//         content: {this.props.content}<br />
//         completed: {this.props.completed ? 'yes' : 'no'}
//       </li>
//     )
//   }
// }

export default Todo;