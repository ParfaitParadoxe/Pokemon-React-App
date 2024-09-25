import React from 'react';
import { Pokemon } from '../types/pokemonTypes';

interface PokemonCardProps {
    pokemon: Pokemon;
    type: boolean;
    selectedMove: string;
    movePower: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ type, pokemon, selectedMove, movePower }) => {
    return (
        <div className="row col-md-12">
            {type ? (
                <>
                    <div className="col-md-6">

                        <h3>{pokemon.name}</h3>
                        <div className="pokemon-details">
                            <p className="attack-badge">
                                <strong>{selectedMove}</strong>: {movePower}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="pokemon-sprite" src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
                </>
            ) : (
                <>
                    <div className="col-md-6">
                        <img className="pokemon-sprite" src={pokemon.sprites.back_default} alt={pokemon.name}/>
                    </div>

                    <div className="col-md-6">

                        <h3>{pokemon.name}</h3>
                        <div className="pokemon-details">
                            <p className="attack-badge">
                                <strong>{selectedMove}</strong>: {movePower}
                            </p>
                        </div>
                    </div>
                </>
            )}


        </div>
    );
};

export default PokemonCard;
