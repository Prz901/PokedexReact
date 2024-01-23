import styled from 'styled-components'

export const GameList = styled.div`
  min-height:100px;
  width: 60vw;
  padding:20px 0px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
`

export const Load = styled.img`
  width: 100px;
  height: 100px;
`;

export const ContentLoad = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PokemonGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  padding: 10px;
`

export const GameTitle = styled.h1`
  font-size: 12px;
  letter-spacing: 1;
  padding: 5px;
  text-transform: uppercase;
`

export const GameImg = styled.img`
  height: 140px;
  width: 140px;
`