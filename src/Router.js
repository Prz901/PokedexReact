import { Route, BrowserRouter, Switch } from 'react-router-dom'
import React from 'react'

import Home from './pages/Home'
import Kanto from './pages/Pokedex/Kanto'

export default (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/kanto" component={Kanto} />
                <Route exact path="/:nome" component={() => <div>algumavcdwvq</div>} />
            </Switch>
        </BrowserRouter>
    )
}