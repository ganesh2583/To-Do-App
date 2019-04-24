import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="#">
            <img
              src="/logo.jpg"
              width="160"
              height="40"
              className="d-inline-block align-top"
              alt=""
            />
          </Link>
          <Link to="/" className="nav-item pull-right">
            Inbox
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
