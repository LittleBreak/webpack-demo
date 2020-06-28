import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const { route } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/p2">p2</Link>
          </li>
          <li>
            <Link to="/users">p3</Link>
          </li>
        </ul>
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default Home;
