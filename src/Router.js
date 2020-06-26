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

export default (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/kanto" component={Kanto} />
                <Route exact path="/Johto" component={Johto} />
                <Route exact path="/Hoen" component={Hoen} />
                <Route exact path="/Sinnoh" component={Sinnoh} />
                <Route exact path="/Unova" component={Unova} />
                <Route exact path="/Kalos" component={Kalos} />
                <Route exact path="/Alola" component={Alola} />
                <Route exact path="/*" component={() => <div>WRONG PATH</div>} />
            </Switch>
        </BrowserRouter>
    )
}