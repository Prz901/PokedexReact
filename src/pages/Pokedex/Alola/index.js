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
              <h1>Alola Pokedex</h1>
              <p>
                Essa pokedex representa a sétima geração de pokemons e todos estão listados abaixo.
              </p>
            </Title>
            <PokemonList startPoke={722} endPoke={809} />
          </PokemonBody>
        </div>
      </Background>
      <FooterPage />
    </Container>
  );
};
