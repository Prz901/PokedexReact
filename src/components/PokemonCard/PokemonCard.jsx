import React from 'react'

import { Pokemon, Types } from './style'

export default function PokemonCard({ pokemon }) {
  //destructuring
  const { data } = pokemon
  const { name } = data
  const { id } = data
  const { types } = data

  const object = {
    poison: 'purple',
    fire: 'red',
    water: 'blue',
    grass: 'green',
    flying: 'lightskyblue',
    normal: '#a4acaf',
    bug: '#729f3f',
    psychic: 'lightcoral',
    fairy: 'lightpink',
    ground: ' #bf9926',
    fighting: '#d56723',
    electric: '#eed535',
    steel: 'lightsteelblue',
    ice: 'lightcyan',
    dragon: '#4e38e9',
    rock: '#a38c21',
  }

  let valor = ('000' + id).slice(-3)

  return (
    <>
      <Pokemon>
        <a href={`https://www.pokemon.com/br/pokedex/${data.name}`}>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${valor}.png`}
            className='pokemon-image'
            alt='pokemons'
          />
        </a>
        <p className='pokemon-id'>{id}</p>
        <p className='pokemon-name'>
          <a href={`https://pokemondb.net/pokedex/${name}`}>{name}</a>
        </p>
        <Types className='pokemon-types'>
          {types.map((type, index) => {
            return (
              <span key={index} style={{ color: `${object[type.type.name]}` }}>
                {type.type.name}
              </span>
            )
          })}
        </Types>
      </Pokemon>
    </>
  )
}
