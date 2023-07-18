import React from "react";

import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        const { pokemonList } = this.props
       

        return (
            <>
                <h1>Pokedex</h1>
                <ul>
                    {
                        pokemonList.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)
                    }
                </ul>
            </>
        );
    }
}

Pokedex.defaultProps = {
    pokemonList: [],
  };

export default Pokedex
