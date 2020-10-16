import React from 'react';
import PropTypes from 'prop-types';

class Pokemons extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props.pokemons;

    return (
      <div className="pokemons">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}
// o nome da classe 
Pokemons.propTypes = {
  pokemons: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};


export default Pokemons;
