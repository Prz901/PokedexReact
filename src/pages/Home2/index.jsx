import React from 'react'

import { Container, Pokebola } from './style'

import { Link } from 'react-router-dom'

export default function Home2() {
  return (
    <Container>
      <h1>Bem vindo ao Pokedex Site!</h1>
      <Pokebola>
        <div className='rectangle-red'></div>
        <div className='line'></div>
        <div className='button'>
          <Link to='/home' className='button-in'></Link>
        </div>
        <div className='rectangle-white'></div>
      </Pokebola>
    </Container>
  )
}
