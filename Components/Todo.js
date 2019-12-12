import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import TodoList from './TodoList';

class Todo extends Component {
  constructor(){
    super();
    this.state= {
      todo: '',
      error: false,
      todoList: [
        {
          id: 1,
          todoName: 'Todo 1',
          completed: false
        },
        {
          id: 2,
          todoName: 'Todo 2',
          completed: true
        },
        {
          id: 3,
          todoName: 'Todo 3',
          completed: false
        }
      ]
    }
  }

  handleInputChange = (e) => {
    this.setState({todo: event.target.value})
    this.setState({error: event.target.value.length? false: true})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.validateForm()){
      this.setState({todo: ''})
    }
  }

  validateForm =()=> {
    if(this.state.todo === '') {
      this.setState({error: true})
      return false
    } else{
      return true
    }
  }

  render(){
    return <Fragment>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="todo" value={this.state.todo} onChange={this.handleInputChange} />
                <button>Add</button>
                {this.state.error && <div className="error">Please enter todo item</div>}
              </form>
              <TodoList list={this.state.todoList}/>
           </Fragment>
  }
}

export default Todo