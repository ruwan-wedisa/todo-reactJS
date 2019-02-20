import React, { Component } from 'react';
import Todos from './Todos'
import Addtodo from './Addtodo'

class App extends Component {
  state={
    todos:[
      {id:1,content:"play COD"},
      {id:2,content:"Go to Gym"}
    ]
  }

  deleteTodo =(id) =>{
    let todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })

    this.setState({
      todos:todos
    })
  }

  addTodo =(todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos,todo]
    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className= "center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteItem={this.deleteTodo}/>
      <Addtodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
