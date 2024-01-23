import React from 'react';
// import { Link } from 'react-router-dom'

import { Container, Body, BodyTitle, BodyContent, Notification, Content } from './style.js'

import NavBar from '../Nav-Bar/index.js';
import FooterComponent from '../../components/Footer'

const Home = () => {
    return (
        <Container>
            <NavBar />
            <Body>
                <BodyTitle>
                    <h1>Pokemon</h1>
                </BodyTitle>
                <BodyContent>
                    <Notification>
                        <p>
                            Este é um site feito em React com uso da api PokeApi que é gratuita visando apenas o conhecimento e o aprendizado de um projeto React totalmente do zero.
                        </p>
                    </Notification>
                    <Content>
                        Pokémon é uma franquia de mídia que pertence a The Pokémon Company, tendo sido criada por Satoshi Tajiri em 1995. Ela é centrada em criaturas ficcionais chamadas "Pokémon", que os seres humanos capturam e os treinam para lutarem entre si com seus ataques de diversos tipos.
                        A franquia começou com um par de jogos lançados para o Game Boy original, desenvolvidos pela Game Freak e publicados pela Nintendo. Atualmente, a franquia se estende em jogos, cartas colecionáveis, série de televisão, além de filmes, mangás e brinquedos. Pokémon é a segunda franquia de mídia de jogos mais bem sucedida e lucrativa do mundo, atrás da franquia de Mario que também pertence a Nintendo.
                    </Content>
                    <Content>
                        O nome Pokémon é uma abreviação da marca japonesa Pocket Monsters. O termo Pokémon, além de se referir a própria franquia Pokémon, também se refere às mais de 900 espécies de ficção que aparecem na mídia de Pokémon. A palavra "Pokémon" é usada no singular e plural para o nome individual de cada espécie; a gramática correta é "um Pokémon" e "muitos Pokémon", bem como "um Pikachu" e "muitos Pikachu" no entanto, em Pokémon Red, Blue e Yellow, alguns NPCs se referiam a Clefairy e Diglett no plural, mostrando "CLEFAIRYs" and "DIGLETTs", respectivamente. Isso foi arrumado em FireRed e LeafGreen.
                    </Content>
                    <Content>
                        Este site possui todas as pokedex ja criadas pela Pokemon Company e voce pode conferir no menu Pokedexes e pode acessar a informação de cada Pokemon clicando em seu nome.
                    </Content>

                    {/* <BodyTitle>
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
                    </ListOfPokedex> */}
                </BodyContent>

            </Body>
            <FooterComponent />
        </Container>
    );
}

export default Home;
