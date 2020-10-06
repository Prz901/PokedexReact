import React from 'react';

import scizor from '../../assests/scizor.png'
import pokeball from '../../assests/Pokeball.png'

import { Link } from 'react-router-dom'

import { Container, Header, Body, List, ListOfPokedex, Background } from './style.js'

const Home = () => {
    return (
        <Container>
            <Header>
                {/* <img src={pokeball} alt="pokeball" /> */}
                <img src={scizor} alt="scizor pokemon" />
                <h1 >Pokedex Site</h1>
            </Header>
            <Body>
                <p >Este é um site feito em React para treino e com uso de uma api gratuita visando apenas o conhecimento e o aprendizado de fazer um projeto React totalmente do zero.</p>
                <h2 >Link para as Pokedexes - Clique para abri qual pokedex voce quer </h2>
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
