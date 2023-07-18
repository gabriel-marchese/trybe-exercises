import React from "react";
import PropTypes from 'prop-types';


class Pokemon extends React.Component {
    render() {

        const { pokemon } = this.props
        const { name, type, averageWeight, image } = pokemon;
        
           

        return (
            <li className="pokemon">
                <div>
                    <p>{ name }</p>
                    <p>{ type }</p>
                    <p>{ averageWeight.value }{ averageWeight.measurementUnit}</p>
                </div>
                <img src={ image } alt={ name }></img>
            </li>
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string,
      }),
      image: PropTypes.string,
      moreInfo: PropTypes.string,
    }).isRequired,
  };

export default Pokemon