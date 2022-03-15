import React from "react";

import PokemonList from "../../../components/PokemonList/index.jsx";

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
              <h1>Johto Pokedex</h1>
              <p>
                Essa pokedex representa a segunda geração de pokemons todos os seus pokemons estão listados abaixo.
              </p>
            </Title>
            <PokemonList startPoke={152} endPoke={251} />
          </PokemonBody>
        </div>
      </Background>
    </Container>
  );
};
