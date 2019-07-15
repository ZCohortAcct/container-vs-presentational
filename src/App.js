import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './components/nav'
import TodoList from './containers/todolist'
import TodoNew from './containers/todonew'

class App extends Component {
  state = {
    todos: [
      {content: 'finish bilding app', completed: true}, 
      {content: 'eat breakfast', completed: false}, 
      {content: 'do laundry', completed: false}
    ]
  }

  createTodo = (obj) => {
    this.setState({todos: [...this.state.todos, obj]})
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <div className='App'>
            <Switch>
              <Route exact path='/' render={(props) => <TodoList {...props} todos={this.state.todos} />} />
              <Route exact path='/new' render={(props) => <TodoNew {...props} createTodo={this.createTodo} />} />              
            </Switch>
          </div>
        </Router>
      
      </div>
     );
  }
}

export default App;
