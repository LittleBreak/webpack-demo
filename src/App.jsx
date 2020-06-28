import React, { Component } from "react";
import { Button, Modal } from "antd";
// import "antd/dist/antd.css";
// import moduleName from 'ant';
import "./app.less";
import "./common.css";
// import MainPage from "./page/MainPage.jsx";
import Home from "./page/Home.jsx";
import routes from "./config/routes.js";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* kick it all off with the root route */}
          {renderRoutes(routes)}
        </Router>
      </div>
    );
  }
}

export default App;
