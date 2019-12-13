import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import TodoList from './TodoList';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state= {
      list: this.props.list
    }
  }

  handleTodoClick = () =>{
    
  }
  render() {
    return <ul>
              {this.state.list.map(item => 
              <Fragment key={item.id}>
                <li onClick={this.handleTodoClick}>{item.todoName}</li>
              </Fragment>)}
           </ul>
  }
}

export default TodoList