import { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = {
    name: 'howto-neutrino'
  };
  render() {
    return (
      <Card />
    )
  };
};
