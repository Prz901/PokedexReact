import styled from "styled-components";

export const Title = styled.div`
  justify-content: center;
  margin-top: 2rem;

  h1 {
    font-size: 27px;
    color: #2d3748;
    font-weight: 600;
    text-align: center;
  }
  p {
    font-size: 18px;
    margin-top: 2rem;
    color: #4a5568;
    font-weight: 400;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div`
    background-color: #727272;
    background-image: repeating-linear-gradient(-45deg, #6a6a6a 0, #6a6a6a 2px, #727272 2px, #727272 11px);
    width:100%;
    min-height: 100vh;
`;

export const PokemonBody = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 10px;
`;

export const PokemonList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  padding:20px 0px;
`

export const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .pokemon-id {
    font-size: 14px;
    color: #737373;
  }
  .pokemon-name {
    color: #2769be;
    font-size: 16px;
  }
  .pokemon-types {
    font-size: 14px;

    span{
      margin-right:3px;
    }
  }

  .pokemon-name a{
    color: #2769be;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
  }
  .pokemon-name a:hover{
      color:coral;
  }
`;
