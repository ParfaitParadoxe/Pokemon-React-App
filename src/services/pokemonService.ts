import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemon = async (name: string) => {
    const response = await axios.get(`${API_URL}/pokemon/${name}`);
    return response.data;
};

export const getMove = async (moveName: string) => {
    const response = await axios.get(`${API_URL}/move/${moveName}`);
    return response.data;
};
