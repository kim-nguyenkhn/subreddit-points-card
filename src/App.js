import React, { Component } from "react";
import Card from "./components/Card";
import get from "lodash/get";
import "./App.css";

class App extends Component {
  state = {
    change: 0,
    value: "",
    totalAvailable: ""
  };

  normalize = json => {
    const change = get(json, "meta.subredditValue.change").toFixed(1); // number
    const value = get(json, "meta.subredditValue.value").toLocaleString(
      "en-US"
    );
    const totalAvailable = get(
      json,
      "distribution.totalAvailable"
    ).toLocaleString("en-US");
    return [change, value, totalAvailable];
  };

  componentDidMount = async () => {
    // NOTE: Using this mockdata because Response lacks CORS header 'Access-Control-Allow-Origin'
    let response = await fetch("mockdata/response.json");
    let json = await response.json();
    let [change, value, totalAvailable] = this.normalize(json);

    this.setState({
      change,
      value,
      totalAvailable
    });
  };

  render() {
    return (
      <>
        <Card {...this.state} />
      </>
    );
  }
}

export default App;
