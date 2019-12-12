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

  handleCheckboxChange = (e) => {
    
  }

  render() {
    return <ul>
              {this.state.list.map(item => 
              <Fragment key={item.id}>
                <li><input type="checkbox" name={item.todoName} checked={item.completed} onChange={this.handleCheckboxChange}/>{item.todoName}</li>
              </Fragment>)}
           </ul>
  }
}

export default TodoList