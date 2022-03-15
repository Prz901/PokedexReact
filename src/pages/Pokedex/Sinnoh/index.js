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
              <h1>Sinnoh Pokedex</h1>
              <p>
                Essa pokedex representa a quarta geração de pokemons e todos seus pokemons estão listados abaixo.
              </p>
            </Title>
            <PokemonList startPoke={387} endPoke={493}/>
          </PokemonBody>
        </div>
      </Background>
    </Container>
  );
};
