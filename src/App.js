import React, { Component } from "react";
import Card from "./components/Card";

class App extends Component {
  state = {
    change: 0,
    value: "",
    totalAvailable: ""
  };

  componentDidMount = async () => {
    let response = await fetch("mockdata/response.json");
    let json = await response.json();

    this.setState({
      change: json.meta.subredditValue.change,
      value: json.meta.subredditValue.value,
      totalAvailable: json.distribution.totalAvailable
    });
  };

  render() {
    // const { change, value, totalAvailable } = this.state;
    // console.log({ change, value, totalAvailable });
    return (
      <>
        <Card {...this.state} />
      </>
    );
  }
}

export default App;
