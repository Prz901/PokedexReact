import React from "react";

import scizor from "../../assests/scizor.png";

import { useHistory } from "react-router-dom";

import { Header } from "./style";

export default () => {
  const history = useHistory();

  const handleChange = () => {
    history.push("/");
  };

  return (
    <Header>
      <img src={scizor} alt="scizor pokemon" onClick={handleChange} />
      <h1 onClick={handleChange}>Pokedex Site</h1>
    </Header>
  );
};
