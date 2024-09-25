import React, { useEffect, useState } from 'react';
import { getPokemon, getMove } from '../services/pokemonService';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../types/pokemonTypes';

const BattleView: React.FC = () => {
    const [pokemonOne, setPokemonOne] = useState<Pokemon | null>(null);
    const [pokemonTwo, setPokemonTwo] = useState<Pokemon | null>(null);
    const [moveOne, setMoveOne] = useState<string>('');
    const [moveTwo, setMoveTwo] = useState<string>('');
    const [moveOnePower, setMoveOnePower] = useState<number>(0);
    const [moveTwoPower, setMoveTwoPower] = useState<number>(0);
    const [battleLog, setBattleLog] = useState<string>('');

    useEffect(() => {
        const fetchRandomPokemon = async () => {
            const randomPokemonNames = ['pidgey', 'diglett']; // Exemple avec Pidgey et Diglett
            const pokeOne = await getPokemon(randomPokemonNames[0]);
            const pokeTwo = await getPokemon(randomPokemonNames[1]);
            setPokemonOne(pokeOne);
            setPokemonTwo(pokeTwo);

            const randomMoveOne = pokeOne.moves[Math.floor(Math.random() * pokeOne.moves.length)].move.name;
            const randomMoveTwo = pokeTwo.moves[Math.floor(Math.random() * pokeTwo.moves.length)].move.name;

            setMoveOne(randomMoveOne);
            setMoveTwo(randomMoveTwo);

            const moveDataOne = await getMove(randomMoveOne);
            const moveDataTwo = await getMove(randomMoveTwo);

            setMoveOnePower(moveDataOne.power || 50); // Default to 50 if no power is available
            setMoveTwoPower(moveDataTwo.power || 50);
        };

        fetchRandomPokemon();
    }, []);

    const startBattle = async () => {
        if (pokemonOne && pokemonTwo) {
            const winner = moveOnePower > moveTwoPower ? pokemonOne : pokemonTwo;
            const loser = moveOnePower > moveTwoPower ? pokemonTwo : pokemonOne;
            const winnerMove = moveOnePower > moveTwoPower ? moveOne : moveTwo;

            setBattleLog(`${winner.name} lands a decisive blow with ${winnerMove} knocking out ${loser.name}!`);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card" style={{height: "600px"}}>
                        {pokemonOne && <PokemonCard type={true} pokemon={pokemonOne} selectedMove={moveOne} movePower={moveOnePower}/>}

                        {pokemonTwo && <PokemonCard type={false} pokemon={pokemonTwo} selectedMove={moveTwo} movePower={moveTwoPower}/>}

                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card" style={{height: "200px"}}>
                        <div className="card-body">

                            <div className="battle-view">
                                <button onClick={startBattle}>Start Battle</button>
                                <div className="battle-log">
                                    <h3>Battle Log</h3>
                                    <p>{battleLog}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default BattleView;
