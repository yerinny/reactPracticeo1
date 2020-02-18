import React, { Component } from 'react';
import './App.css';
import CardSet from './CardSet';
import cards from './cards';

console.log(cards)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <CardSet cards={cards} />
        </div>

      </div>
    )
  }
}
export default App;
