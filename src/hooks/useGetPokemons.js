import { useState, useEffect } from 'react'

import api from '../services/api'

export const useGetPokemons = (startPoke, endPoke) => {
  const [pokemons, setPokemons] = useState({});
  const [isLoad, setIsLoad] = useState(true);

  async function fetchPokemons() {
    const pokemonList = [];

    for (let i = startPoke; i <= endPoke; i++) {
      const response = api.get(`pokemon/${i}`);
      pokemonList.push(response);
    }
    setPokemons(await Promise.all(pokemonList));
    setIsLoad(false);
  }

  useEffect(() => {
    fetchPokemons();
  });

  return {isLoad, pokemons}
}