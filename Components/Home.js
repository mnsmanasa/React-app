import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Todo from "./Todo"

class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return <Fragment><Todo/></Fragment>
  }
}

export default Home