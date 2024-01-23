import React, { useState, useEffect } from "react";

import api from "../../services/api";

import {
  Load,
  ContentLoad,
  GameList,
  PokemonGame,
  GameTitle,
  GameImg,
} from "./style";

export function PokemonGameList() {
  const [games, setGames] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  async function fetchGames() {
    const response = await api.get(`version`);
    const { results } = response.data;

    setGames(results);
    setIsLoad(false);
  }

  const gameImages = {
    red: "https://m.media-amazon.com/images/I/71aow5iRsfL._AC_UF1000,1000_QL80_.jpg",
    blue: "https://www.ziliongames.com.br/banco_imagens/produtos/g/pokemon-blue-version-gameboy-color-seminovo1pvr.jpg",
    yellow:
      "https://upload.wikimedia.org/wikipedia/pt/4/43/Pok%C3%A9mon_Yellow_cover.png",
    gold: "https://cdn-cosmos.bluesoft.com.br/products/45496690526",
    silver:
      "https://m.media-amazon.com/images/I/81UQlso+frL._AC_UF1000,1000_QL80_.jpg",
    crystal:
      "https://upload.wikimedia.org/wikipedia/pt/1/19/Pok%C3%A9mon_Crystal_cover.png",
    ruby: "https://http2.mlstatic.com/D_NQ_NP_773035-MLA48158406496_112021-O.webp",
    sapphire: "https://m.media-amazon.com/images/I/61p+1+PYSML.jpg",
    emerald:
      "https://upload.wikimedia.org/wikipedia/pt/7/72/Pok%C3%A9mon_Emerald_cover.png",
    firered:
      "https://m.media-amazon.com/images/M/MV5BZjM5NzRlZmItM2Y1Mi00MTNhLTlhZTEtZWNhN2U5M2U3NzBlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg",
    leafgreen:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Pokemon_LeafGreen_box.jpg",
    diamond:
      "https://archives.bulbagarden.net/media/upload/thumb/6/69/Diamond_EN_boxart.jpg/1200px-Diamond_EN_boxart.jpg",
    pearl: "https://m.media-amazon.com/images/I/61MM1UJWfeL.jpg",
    platinum:
      "https://upload.wikimedia.org/wikipedia/pt/8/8d/Pok%C3%A9mon_Platinum_cover.png",
    heartgold:
      "https://assets1.ignimgs.com/2019/05/17/pokemon-heartgold---button-1558055594925.jpg",
    soulsilver:
      "https://m.media-amazon.com/images/I/71WlibEzVaL._AC_UF1000,1000_QL80_.jpg",
    black:
      "https://cdn.awsli.com.br/800x800/1258/1258259/produto/221047567/pokemon-black-ve-j9nj0h9jjv.jpg",
    white: "https://m.media-amazon.com/images/I/81ZhVKZo2+L.jpg",
    colosseum:
      "https://upload.wikimedia.org/wikipedia/pt/e/ed/Pok%C3%A9mon_Colosseum_cover.png",
    xd: "https://upload.wikimedia.org/wikipedia/en/b/b7/Pok%C3%A9mon_XD-_Gale_of_Darkness_Coverart.png",
  };

  useEffect(() => {
    fetchGames();
  }, []);

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
    <GameList>
      {games.map((game, id) => {
        return (
          <PokemonGame>
            <GameTitle key={id}>{game.name}</GameTitle>
            <GameImg src={gameImages[game.name]} alt="pokemon image game" />
          </PokemonGame>
        );
      })}
    </GameList>
  );
}
