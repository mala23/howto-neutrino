import React, { Component } from 'react';
import './app.css';
import Counter from '../Counter';

class App extends Component {
  state = {
    name: 'howto-neutrino'
  };
  render() {
    return (
      <Counter />
    )
  };
};

export default App
