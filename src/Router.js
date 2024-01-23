import { Route, BrowserRouter, Switch } from 'react-router-dom'
import React from 'react'

import Home from './pages/Home'
import Kanto from './pages/Pokedex/Kanto'
import Johto from './pages/Pokedex/Johto'
import Hoen from './pages/Pokedex/Hoen'
import Sinnoh from './pages/Pokedex/Sinnoh'
import Unova from './pages/Pokedex/Unova'
import Kalos from './pages/Pokedex/Kalos'
import Alola from './pages/Pokedex/Alola'
import SwordShield from './pages/Pokedex/SwordShield'
import NationalDex from './pages/Pokedex/National-Dex'
import ScarletViolet from './pages/Pokedex/ScarletViolet'
import { PageNotFound } from './pages/NotFoundPage'
import { Games } from './pages/Games'
import { Berries } from './pages/Berries'

import { PokemonDetails } from './pages/PokemonDetails'

// import Home2 from './pages/Home2'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route exact path="/" component={Home2} /> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/National-Dex" component={NationalDex} />
                <Route exact path="/kanto" component={Kanto} />
                <Route exact path="/Johto" component={Johto} />
                <Route exact path="/Hoen" component={Hoen} />
                <Route exact path="/Sinnoh" component={Sinnoh} />
                <Route exact path="/Unova" component={Unova} />
                <Route exact path="/Kalos" component={Kalos} />
                <Route exact path="/Alola" component={Alola} />
                <Route exact path="/Sword-shield" component={SwordShield} />
                <Route exact path="/Scarlet-violet" component={ScarletViolet} />
                <Route exact path="/pokemon/:id" component={PokemonDetails} />
                <Route exact path="/games" component={Games} />
                <Route exact path="/berries" component={Berries} />


                <Route exact path="/*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    )
}