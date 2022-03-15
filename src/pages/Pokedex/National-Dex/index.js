import React from "react";

import PokemonList from "../../../components/PokemonList";
import FooterPage from "../../../components/Footer";

import {
  Container,
  PokemonBody,
  Title,
  Background
} from "./style";

import NavBar from "../../Nav-Bar";

export default () => {
  return (
    <>
    <Container>
      <NavBar />
      <Background>
        <div className="container">
          <PokemonBody>
            <Title>
              <h1>National Pokedex</h1>
            </Title>
            <PokemonList startPoke={1} endPoke={898}/>
          </PokemonBody>
        </div>
      </Background>
      <FooterPage />
    </Container>
    </>
  );
};
