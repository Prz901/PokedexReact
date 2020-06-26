import React, { useState, useEffect } from "react";
import api from "../../../services/api";

import {
  Load,
  Container,
  PokemonList,
  PokemonBody,
  Pokemon,
  Title,
  Background
} from "./style.js";

import NavBar from "../../Nav-Bar";

const PokemonCard = ({ pokemon }) => {
  //destructuring
  const { data } = pokemon;
  const { name } = data;
  const { id } = data;
  const { types } = data;

  return (
    <>
      <Pokemon>
        <a href={`https://www.pokemon.com/br/pokedex/${data.name}`}>
          <img src={data.sprites.front_default} alt="pokemons" />
        </a>

        <p className="pokemon-id">{id}</p>
        <p className="pokemon-name"> <a href ={`https://pokemondb.net/pokedex/${name}`}>{name}</a> </p>
        <p className="pokemon-types">{types[0].type.name}</p>
      </Pokemon>
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

    for (let i = 722; i <= 807; i++) {
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
      <NavBar />
      <Background>
        <div className="container">
          <PokemonBody>
            <Title>
              <h1>Kanto Pokedex</h1>
              <p>
                Essa pokedex representa a sétima geração de pokemons e todos estão listados abaixo.
              </p>
            </Title>
            <PokemonList>
              {pokemons.map((pokemon) => (
                <PokemonCard pokemon={pokemon} />
              ))}
            </PokemonList>
          </PokemonBody>
        </div>
      </Background>
    </Container>
  );
};
