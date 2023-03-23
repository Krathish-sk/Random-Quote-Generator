import React from "react";
import "./App.css";
import axios from "axios";
import Links from "./Components/Links";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const advice = response.data.slip.advice;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Links />
        <div className="app">
          <div className="card">
            <h1 className="heading">{this.state.advice}</h1>
            <button className="button" onClick={this.fetchAdvice}>
              More Advice
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
