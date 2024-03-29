import React from "react";

import PokemonList from "../../../components/PokemonList";
import FooterPage from "../../../components/Footer";

import { Container, PokemonBody, Title, Background } from "./style.js";

import NavBar from "../../Nav-Bar";

export default () => {
  return (
    <Container>
      <NavBar />
      <Background>
        <div className="container">
          <PokemonBody>
            <Title>
              <h1>Galar</h1>
              <p>
                Essa pokedex representa a oitava geração de pokemons e todos
                estão listados abaixo.
              </p>
            </Title>
            <PokemonList startPoke={810} endPoke={898} />
          </PokemonBody>
        </div>
      </Background>
      <FooterPage />
    </Container>
  );
};
