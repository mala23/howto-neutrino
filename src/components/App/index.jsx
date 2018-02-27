import React, { Component } from 'react';
import './app.css';
import Card from '../Card';

class App extends Component {
  state = {
    name: 'howto-neutrino'
  };
  render() {
    return (
      <Card />
    )
  };
};

export default App
