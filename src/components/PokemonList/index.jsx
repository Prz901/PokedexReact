import React from "react";

import { PokemonList, Load, ContentLoad } from "./style";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useGetPokemons } from "../../hooks/useGetPokemons";

export default ({ startPoke, endPoke }) => {
  const {isLoad, pokemons} = useGetPokemons(startPoke, endPoke)

  if (isLoad) {
    return (
      <ContentLoad>
        <Load
          src="https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"
          alt="pikachu running"
        />
      </ContentLoad>
    );
  }

  return (
    <PokemonList>
      {pokemons?.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </PokemonList>
  );
};
