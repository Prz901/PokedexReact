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
              <h1>Unova Pokedex</h1>
              <p>
                Essa pokedex representa a quinta geração de pokemons e todos seus pokemons estão listados abaixo.
              </p>
            </Title>
            <PokemonList startPoke={494} endPoke={649}/>
          </PokemonBody>
        </div>
      </Background>
    </Container>
  );
};
