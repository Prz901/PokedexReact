import React from "react";

import NavBar from "../Nav-Bar";
import FooterPage from "../../components/Footer";

import { Container, Background, PokemonBody, Title } from "./style";
import { PokemonGameList } from "../../components/PokemonGameList";

export function Games() {
  return (
    <Container>
      <NavBar />
      <Background>
        <div className="container">
          <PokemonBody>
            <Title>
              <h1>Todas as gerações de jogos da franquia</h1>
              {/* <p>
                Todas as gerações de jogos da franquia pokemon estão listadas
                abaixo.
              </p> */}
            </Title>
            <PokemonGameList />
          </PokemonBody>
        </div>
      </Background>
      <FooterPage />
    </Container>
  );
}
