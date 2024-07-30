import React from "react";

import PokemonList from "../../components/PokemonList/index.jsx";
import FooterPage from "../../components/Footer/index.jsx";
import NavBar from "../Nav-Bar/index.js";

import {
  Container,
  PokemonBody,
  Title,
  Background
} from "./style.js";

export function PokedexRegion ({titlePokedex, subTitlePokedex, startPoke, endPoke}){

  return (
    <Container>
      <NavBar />
      <Background>
        <div className="container">
          <PokemonBody>
            <Title>
              <h1>{titlePokedex}</h1>
              <p>
                {subTitlePokedex}
              </p>
            </Title>
            <PokemonList startPoke={startPoke} endPoke={endPoke} />
          </PokemonBody>
        </div>
      </Background>
      <FooterPage />
    </Container>
  );
};
