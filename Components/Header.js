import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from "react-router-dom";


class Header extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <header className="header-container">
        <div className="nav-left">
         <NavLink to="/" exact>Logo</NavLink>
        </div>
        <div className="nav-right">
          <ul>
            <li>
             <NavLink to="/Contact" exact>Contact</NavLink>
            </li>
            <li>
             <NavLink to="/About" exact>About</NavLink>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header