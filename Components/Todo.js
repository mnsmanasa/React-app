import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Todo extends Component {
  constructor(){
    super();
    this.state= {
      todo: '',
      error: false
    }
  }

  handleInputChange = (e) => {
    this.setState({todo: event.target.value})
    this.setState({error: event.target.value.length? false: true})
  }

  handleSubmit = (e) => {
    console.log(event.target)
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
    return <form onSubmit={this.handleSubmit}>
      <input type="text" name="todo" value={this.state.todo} onChange={this.handleInputChange} />
      <button>Add</button>
      {this.state.error && <div className="error">Please enter todo item</div>}
    </form>
  }
}

export default Todo