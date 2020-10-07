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
    water: '#0080ff',
    grass: 'green',
    flying: '#556dff',
    normal: '#797964',
    bug: '#83901a',
    psychic: '#ff227a',
    fairy: 'lightpink',
    ground: '#bf9926',
    fighting: '#a84d3d',
    electric: '#eed535',
    steel: 'lightsteelblue',
    ice: '#0af',
    dragon: '#4e38e9',
    rock: '#a59249',
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
