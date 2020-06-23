import React, { useState, useEffect } from "react";
import api from "../../../services/api";

import { Load, Container, PokemonList, Header, PokemonBody } from "./style.js";

const PokemonCard = ({ pokemon }) => {
  const { data } = pokemon;
  const {name} = data
  return (
    <>
      <a href={`https://www.pokemon.com/br/pokedex/${data.name}`}>
        <img src={data.sprites.front_default} alt="pokemons" />
      </a>
      <p></p>
      <p> {name}</p>
    </>
  );
};

export default () => {
  const [counter, setCounter] = useState(0);
  const [pokemons, setPokemons] = useState(null);
  const [isLoad, setIsLoad] = useState(true);

  async function fecthCounter() {
    const { data } = await api.get("pokemon");
    setCounter(data.count);
  }

  async function fetchPokemons() {
    const pokemonList = [];

    for (let i = 1; i <= 151; i++) {
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
    return <Load> Carregando </Load>;
  }

  return (
    <Container>
      <Header>
        <h1>Kanto Pokedex</h1>
      </Header>
      <PokemonBody>
        <PokemonList>
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
          ))}
        </PokemonList>
      </PokemonBody>
    </Container>
  );
};
