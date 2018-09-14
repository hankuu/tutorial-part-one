import React from "react";
import Link from "gatsby-link";

class Counter extends React.Component {
  //tää suoritetaan vaan alussa vai?
  constructor() {
    console.log("konstruktor")
  super()
  this.state = { count: 0 }
}
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>

        <button
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count + 1,
            }))
          }
        >
          plus
        </button>

        <button
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count - 1,
            }))
          }
        >
          minus
        </button>
        <Link to="/"> etusivulle</Link>
      </div>
    )
    }
}

export default Counter;
