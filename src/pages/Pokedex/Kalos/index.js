import React, { useState, useEffect } from "react";
import api from "../../../services/api";

import PokemonCard from '../../../components/PokemonCard/PokemonCard'


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

    for (let i = 650; i <= 721; i++) {
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
              <h1>Kalos Pokedex</h1>
              <p>
                Essa pokedex representa a sexta geração de pokemons e todos seus pokemons estão listados abaixo.
              </p>
            </Title>
            <PokemonList>
              {pokemons.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
              ))}
            </PokemonList>
          </PokemonBody>
        </div>
      </Background>
    </Container>
  );
};
