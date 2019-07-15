import React, { Component } from 'react';

class TodoNew extends Component {
  state = {
    content: '',
    completed: false
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    // debugger
    this.setState({ [name]: value })
  }

  handleFormSubmission = (e) => {
    e.preventDefault();

    this.props.createTodo(this.state)
    this.props.history.push('/')
  }

  render() {
    let {content, completed} = this.state
    console.log(this.state)
    return(
      <div>
        <h1>Add A ToDo!</h1>
        <form onSubmit={this.handleFormSubmission}>
          <label>Content: </label>
          <input type='text' name='content' value={content} onChange={this.handleChange}/><br />
          <label>Task completed?</label>
          <input type='checkbox' name='completed' value={completed}onChange={this.handleChange}/><br />
          <label>newField: </label>
          <input type='text' name='newField' value={this.state.newField} onChange={this.handleChange}/><br />
          <label>secondField: </label>
          <input type='text' name='secondField' onChange={this.handleChange}/><br />
          <label>thirdField: </label>
          <input type='text' name='thirdField' onChange={this.handleChange}/><br />
          <input type='submit' value='Add ToDo'/> 
        </form>
      </div>
    )
  }
}

export default TodoNew;