import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Body, BodyTitle, BodyContent, ListOfPokedex } from './style.js'

import NavBar from '../Nav-Bar/index.js';
import FooterComponent from '../../components/Footer'

const Home = () => {
    return (
        <Container>
            <NavBar />
            <Body>
                <BodyTitle>
                    <h1>Pokedéx Pokemon</h1>
                </BodyTitle>
                <BodyContent>
                    <p>Este é um site feito em React para treino e com uso de uma api gratuita visando apenas o conhecimento e o aprendizado de fazer um projeto React totalmente do zero.</p>
                    <p>Usei de inspiração o site PokemonDB e copiei algumas coisas de css e estilos deles.</p>
                    <BodyTitle>
                        <h2 className='titles'>Todas as Pokedéx estão listadas abaixo!</h2>
                    </BodyTitle>
                    <ListOfPokedex>
                        <Link className="link" to="/national-dex">National Dex </Link>
                        <Link className="link" to="/kanto"> Kanto </Link>
                        <Link className="link" to="/johto"> Johto </Link>
                        <Link className="link" to="/Hoen"> Hoen </Link>
                        <Link className="link" to="/Sinnoh"> Sinnoh </Link>
                        <Link className="link" to="/Unova"> Unova </Link>
                        <Link className="link" to="/Kalos"> Kalos </Link>
                        <Link className="link" to="/Alola"> Alola </Link>
                        <Link className="link" to="/Sword-shield"> Sword e Shield </Link>
                    </ListOfPokedex>
                </BodyContent>
            </Body>
            <FooterComponent />
        </Container>
    );
}

export default Home;
