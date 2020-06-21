import React from 'react';

import scizor from '../../assests/scizor.png'
import pokeball from '../../assests/Pokeball.png'

import { Link } from 'react-router-dom'

import './style.css'

const Home = () => {
    return (
        <div className="content">
            <div className="header">
                <img className="pokeball" src={pokeball} alt="pokeball" />
                <h1 >Pokedex Pokemon Site</h1>
                <img className="scizor" src={scizor} alt="scizor pokemon" />
            </div>
            <div className="body">
                <p className="info">Este é um site feito em React para treino usando uma Api de terceiro sendo ela gratuita para uso.</p>
                <p className="pokedexLink">Link para as Pokedexes - Clique para abri qual pokedex voce quer </p>
                <ul className="listOfPokedex">
                    <li>National Dex</li>
                    <li>
                        <Link to="/banana"> Kanto </Link>
                    </li>
                    <li>Johto</li>
                    <li>Hoen</li>
                    <li>Sinnoh</li>
                    <li>Unova</li>
                    <li>Kalos</li>
                    <li>Alola</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
