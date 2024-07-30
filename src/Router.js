import { Route, BrowserRouter, Switch } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import { PokedexRegion } from "./pages/PokedexRegion";
import { PokemonDetails } from "./pages/PokemonDetails";
import { Games } from "./pages/Games";
import { Berries } from "./pages/Berries";

import { PageNotFound } from "./pages/NotFoundPage";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/National-Dex"
          render={() => (
            <PokedexRegion
              titlePokedex={"National Pokedex"}
              subTitlePokedex={
                "Essa pokedex representa todos os pokemons já criados."
              }
              startPoke={1}
              endPoke={1010}
            />
          )}
        />
        <Route
          exact
          path="/kanto"
          render={() => (
            <PokedexRegion
              titlePokedex={"Kanto"}
              subTitlePokedex={
                "Essa pokedex representa a primeira geração de pokemons e todos estão listados abaixo."
              }
              startPoke={1}
              endPoke={151}
            />
          )}
        />

        <Route
          exact
          path="/Johto"
          render={() => (
            <PokedexRegion
              titlePokedex={"Johto"}
              subTitlePokedex={
                "Essa pokedex representa a segunda geração de pokemons todos os seus pokemons estão listados abaixo."
              }
              startPoke={152}
              endPoke={251}
            />
          )}
        />

        <Route
          exact
          path="/Hoen"
          render={() => (
            <PokedexRegion
              titlePokedex={"Hoen Pokedex"}
              subTitlePokedex={
                "Essa pokedex representa a terceira geração de pokemons e todos seus pokemons estão listados abaixo."
              }
              startPoke={252}
              endPoke={386}
            />
          )}
        />

        <Route
          exact
          path="/Sinnoh"
          render={() => (
            <PokedexRegion
              titlePokedex={"Sinnoh Pokedex"}
              subTitlePokedex={
                "Essa pokedex representa a quarta geração de pokemons e todos seus pokemons estão listados abaixo."
              }
              startPoke={387}
              endPoke={493}
            />
          )}
        />

        <Route
          exact
          path="/Unova"
          render={() => (
            <PokedexRegion
              titlePokedex={"Unova Pokedex"}
              subTitlePokedex={
                "Essa pokedex representa a quinta geração de pokemons e todos seus pokemons estão listados abaixo"
              }
              startPoke={494}
              endPoke={649}
            />
          )}
        />

        <Route
          exact
          path="/Kalos"
          render={() => (
            <PokedexRegion
              titlePokedex={"Kalos Pokedex"}
              subTitlePokedex={
                "Essa pokedex representa a sexta geração de pokemons e todos seus pokemons estão listados abaixo."
              }
              startPoke={650}
              endPoke={721}
            />
          )}
        />

        <Route
          exact
          path="/Alola"
          render={() => (
            <PokedexRegion
              titlePokedex={"Alola Pokedex"}
              subTitlePokedex={
                "Essa pokedex representa a sétima geração de pokemons e todos estão listados abaixo."
              }
              startPoke={722}
              endPoke={809}
            />
          )}
        />

        <Route
          exact
          path="/Sword-shield"
          render={() => (
            <PokedexRegion
              titlePokedex={"Galarian Pokedex"}
              subTitlePokedex={
                "Essa pokedex representa a oitava geração de pokemons e todos estão listados abaixo."
              }
              startPoke={810}
              endPoke={898}
            />
          )}
        />

        <Route
          exact
          path="/Scarlet-violet"
          render={() => (
            <PokedexRegion
              titlePokedex={"Scarlet & Violet"}
              subTitlePokedex={
                "Essa pokedex representa a nona geração de pokemons e todos estão listados abaixo."
              }
              startPoke={906}
              endPoke={1010}
            />
          )}
        />
        <Route exact path="/pokemon/:id" component={PokemonDetails} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/berries" component={Berries} />

        <Route exact path="/*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
