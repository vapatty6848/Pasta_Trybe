import React, { Component } from 'react'
import pokemons from './data'
import Pokemons from './Pokemons'

class PokemonsList extends React.Component {
	render() {
			return (
					<div className="pokedex">
							{this.props.pokemons.map(pokemons => <Pokemons key={pokemons.id} pokemons={pokemons} />)}
					</div>
			);
	}
}
export default PokemonsList

