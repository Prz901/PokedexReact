import React from "react";

import PokemonList from "../../../components/PokemonList";

import {
  Container,
  PokemonBody,
  Title,
  Background
} from "./style.js";

import NavBar from "../../Nav-Bar";

export default () => {

  return (
    <Container>
      <NavBar />
      <Background>
        <div className="container">
          <PokemonBody>
            <Title>
              <h1>Kanto Pokedex</h1>
              <p>
                Essa pokedex representa a primeira geração de pokemons e todos estão listados abaixo.
              </p>
            </Title>
            <PokemonList startPoke={1} endPoke={151} />
          </PokemonBody>
        </div>
      </Background>
    </Container>
  );
};
