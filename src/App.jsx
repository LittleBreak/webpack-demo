import React, { Component } from "react";
import { Button, Modal } from "antd";
// import "antd/dist/antd.css";
// import moduleName from 'ant';
import "./app.less";
import "./common.css";
import MainPage from "./page/MainPage.jsx";
class App extends Component {
  render() {
    return (
      <div>
        <MainPage></MainPage>
      </div>
    );
  }
}

export default App;
