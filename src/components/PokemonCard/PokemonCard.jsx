import React from "react";

import { Pokemon, Types } from "./style";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function PokemonCard({ pokemon }) {
  //destructuring
  const { data } = pokemon;
  const { name } = data;
  const { id } = data;
  const { types } = data;

  const object = {
    poison: "purple",
    fire: "red",
    water: "#0080ff",
    grass: "green",
    flying: "#556dff",
    normal: "#797964",
    bug: "#83901a",
    psychic: "#ff227a",
    fairy: "lightpink",
    ground: "#bf9926",
    fighting: "#a84d3d",
    electric: "#eed535",
    steel: "#8e8ea4",
    ice: "#0af",
    dragon: "#4e38e9",
    rock: "#a59249",
  };

  let valor;

  if (id < 999) {
    valor = ("000" + id).slice(-3);
  } else {
    valor = id;
  }

  // <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/1010.png"></img>;

  return (
    <>
      <Pokemon>
        <a href={`https://www.pokemon.com/br/pokedex/${data.name}`}>
          <img
            // src={sprites.front_default}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${valor}.png`}
            className="pokemon-image"
            alt="pokemons"
          />
        </a>
        <p className="pokemon-id">{id}</p>
        <p className="pokemon-name">
          {/* <a href={`https://pokemondb.net/pokedex/${name}`}>{name}</a> */}
          <Link to={{ pathname: `/pokemon/${id}` }}>{name}</Link>
        </p>
        <Types className="pokemon-types">
          {types.map((type, index) => {
            return (
              <span key={index} style={{ color: `${object[type.type.name]}` }}>
                {type.type.name}
              </span>
            );
          })}
        </Types>
      </Pokemon>
    </>
  );
}
