export interface Pokemon {
    name: string;
    stats: { base_stat: number }[];
    sprites: {
        front_default: string;
        back_default: string;
    };
    types: { type: { name: string } }[];
    moves: { move: { name: string } }[];
}

export interface Move {
    name: string;
    power: number;
}
