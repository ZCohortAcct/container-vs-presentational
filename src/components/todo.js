// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

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


const Todo = (props) => {
  // debugger
  return (
    <li>
      content: <Link to={`/todos/${props.index}`}>{props.content}</Link><br />
      completed: {props.completed ? 'yes' : 'no'}
    </li>
  )
}

// deconstructing
// const Todo = ({content, completed, index}) => {
//   return (
//     <li>
//       content: <Link to={`/todos/${index}`}>{content}</Link><br />
//       completed: {completed ? 'yes' : 'no'}
//     </li>
//   )
// }

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