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
}
`;
export const Load = styled.p``;

export const PokemonBody = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// export const PokemonList = styled.div`
//   display: grid;
//   gap: 2rem;
//   grid-gap: 2rem;
//   grid-auto-flow: row;
//   grid-template-columns: repeat(11, minmax(0, 1fr));

//   background:gray;

//   padding: 2rem;
// `;

export const PokemonList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  padding:20px 0px;
`