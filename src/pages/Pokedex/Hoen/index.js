import React from "react";

import PokemonList from "../../../components/PokemonList";
import FooterPage from "../../../components/Footer";

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
              <h1>Hoen Pokedex</h1>
              <p>
                Essa pokedex representa a terceira geração de pokemons e todos seus pokemons estão listados abaixo.
              </p>
            </Title>
            <PokemonList startPoke={252} endPoke={386} />
          </PokemonBody>
        </div>
      </Background>
      <FooterPage />
    </Container>
  );
};
