import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Title,
  Subtitle,
  Redirect,
  RedirectBorder,
  PikachuImage,
} from "./style";

export function PageNotFound() {
  return (
    <Container>
      <Title>Pagina nao encotrada</Title>
      <Subtitle>
        A pagina que voce tentou entrar não existe volte para a home page.
      </Subtitle>
      <Redirect>
        <RedirectBorder>
          <Link to="/">Voltar para Home</Link>
        </RedirectBorder>
      </Redirect>
      <PikachuImage
        src={
          "https://gkpb.com.br/wp-content/uploads/2023/02/novo-capitao-pikachu-e1677251557266.jpg"
        }
        alt="pikachu thinking"
      />
    </Container>
  );
}
