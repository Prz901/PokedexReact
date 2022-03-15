import React from "react";

import scizor from "../../assests/scizor.png";

import { Header } from "./style";

export default () => {
  return (
    <Header>
      <img src={scizor} alt="scizor pokemon" />
      <h1>Pokedex Site</h1>
    </Header>
  );
};
