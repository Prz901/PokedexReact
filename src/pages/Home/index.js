import React from 'react';

import scizor from '../../assests/scizor.png'
import pokeball from '../../assests/Pokeball.png'

import { Link } from 'react-router-dom'

import { Container, Header, Body, List, ListOfPokedex } from './style.js'

const Home = () => {
    return (
        <Container>
            <Header>
                <img src={pokeball} alt="pokeball" />
                <h1 >Pokedex Pokemon Site</h1>
                <img src={scizor} alt="scizor pokemon" />
            </Header>
            <Body>
                <p >Este é um site feito em React para treino e com uso de uma api gratuita visando apenas o conhecimento e o aprendizado de fazer um projeto React totalmente do zero.</p>
                <p >Link para as Pokedexes - Clique para abri qual pokedex voce quer </p>
                <List>
                    <ListOfPokedex>
                        <li>
                            <Link className="link" to="/national-dex"> National Dex </Link>
                        </li>
                        <li>
                            <Link className="link" to="/kanto"> Kanto </Link>
                        </li>
                        <li>
                            <Link className="link" to="/johto"> Johto </Link>
                        </li>
                        <li>
                            <Link className="link" to="/Hoen"> Hoen </Link>
                        </li>
                        <li>
                            <Link className="link" to="/Sinnoh"> Sinnoh </Link>
                        </li>
                        <li>
                            <Link className="link" to="/Unova"> Unova </Link>
                        </li>
                        <li>
                            <Link className="link" to="/Kalos"> Kalos </Link>
                        </li>
                        <li>
                            <Link className="link" to="/Alola"> Alola </Link>
                        </li>
                    </ListOfPokedex>
                </List>
            </Body>
        </Container>
    );
}

export default Home;
