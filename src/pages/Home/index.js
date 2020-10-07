import React from 'react';

import scizor from '../../assests/scizor.png'

import { Link } from 'react-router-dom'

import { Container, Header, Body, BodyTitle, BodyContent, ListOfPokedex } from './style.js'

import FooterComponent from '../../components/Footer'

const Home = () => {
    return (
        <Container>
            <Header>
                <img src={scizor} alt="scizor pokemon" />
                <h1 >Pokedex Site</h1>
            </Header>
            <Body>
                <BodyTitle>
                    <h1>Pokedexes Pokemon</h1>
                </BodyTitle>
                <BodyContent>
                    <p>Este é um site feito em React para treino e com uso de uma api gratuita visando apenas o conhecimento e o aprendizado de fazer um projeto React totalmente do zero.</p>
                    <BodyTitle>
                        <h2 className='titles'>Todas as Pokedex estão listadas abaixo!</h2>
                    </BodyTitle>
                    <ListOfPokedex>
                        <h2 className='h2-link'>Pokedexes</h2>
                        <Link className="link" to="/national-dex">National Dex </Link>
                        <Link className="link" to="/kanto"> Kanto </Link>
                        <Link className="link" to="/johto"> Johto </Link>
                        <Link className="link" to="/Hoen"> Hoen </Link>
                        <Link className="link" to="/Sinnoh"> Sinnoh </Link>
                        <Link className="link" to="/Unova"> Unova </Link>
                        <Link className="link" to="/Kalos"> Kalos </Link>
                        <Link className="link" to="/Alola"> Alola </Link>
                    </ListOfPokedex>
                </BodyContent>
            </Body>
            <FooterComponent />
        </Container>
    );
}

export default Home;
