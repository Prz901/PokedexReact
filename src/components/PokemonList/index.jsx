import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { PokemonList, Load } from "./style";
import PokemonCard from "../PokemonCard/PokemonCard";

export default ({ startPoke, endPoke }) => {
  const [counter, setCounter] = useState(0);
  const [pokemons, setPokemons] = useState({});
  const [isLoad, setIsLoad] = useState(true);

  async function fecthCounter() {
    const { data } = await api.get("pokemon");
    setCounter(data.count);
  }

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
    fecthCounter();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (isLoad) {
    return (
      <Load
        src="https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"
        alt="pikachu running"
      />
    );
  }

  return (
    <PokemonList>
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </PokemonList>
  );
};
