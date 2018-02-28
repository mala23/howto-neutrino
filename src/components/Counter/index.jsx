import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  add = () => {
    console.log('click')
    this.setState({
      count: this.state.count + 1,
    })
  }
  
  render() {
    return (
      <section>
        <p>Current count is: {this.state.count}</p>
        <button onClick={this.add}>+</button>
      </section>
    )
  }
}

export default Counter
