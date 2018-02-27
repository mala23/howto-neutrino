import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    name: 'howto-neutrino'
  };

  render() {
    return (
      <article>
        <section>
          <p>Name here...</p>
          <p>Company Name here...</p>
        </section>
      </article>
    );
  };
};
