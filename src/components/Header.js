import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Demo
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/b24">
                B-24
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/b25">
                B-25
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/p47">
                P-47
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/p40">
                P-40
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
