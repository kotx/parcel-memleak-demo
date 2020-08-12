import * as React from "react";
import { Link } from "react-router-dom";

import './css/Navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    );
  }
}