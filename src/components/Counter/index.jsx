import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <section>
        <p>Current count is: {this.state.count}</p>
        <button>+</button>
      </section>
    )
  }
}

export default Counter
