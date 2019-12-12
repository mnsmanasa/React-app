import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hello from './Hello';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="wrapper">
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/Contact"} component={Contact} />
              <Route path={"/About"} component={About} />
            </Switch>
          </div>          
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
