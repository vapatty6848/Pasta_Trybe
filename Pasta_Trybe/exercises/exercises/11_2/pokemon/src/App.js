import React from 'react';
import pokemons from './data'
import PokemonsList from './PokemonsList'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1> Pokedes </h1>
      <PokemonsList pokemons={pokemons} />
    </div>
  );
}

export default App;
