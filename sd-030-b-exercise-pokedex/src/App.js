import React from 'react';
import './App.css';

import pokemonList from './data';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Exercise - Pokedex</h1>
        <Pokedex pokemonList={ pokemonList } />
      </main>
    );
  }
}

export default App;
