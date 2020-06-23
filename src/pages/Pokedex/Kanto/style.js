import styled from 'styled-components'


export const Header = styled.div`
    display:flex;
    justify-content: center;
    width:80%;
    border: 1px solid rgb(176,176,176);
    background-color: rgb(216,216,216);
    padding: 5px;
    margin: 20px;

    >h1 {
        font-size: 39px;
        color: rgb(72,72,72);
        text-align: center;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
`

export const Load = styled.p`
    

`

export const PokemonBody = styled.div`
    width: 80%;
    border: 1px solid rgb(176,176,176);
    background-color: rgb(216,216,216);
    padding: 5px;
    margin: 20px;
    display:flex;
    justify-content:center;
    align-items:center;

`

export const PokemonList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;

    >img {
        border:1px solid lightgray;
    }
`
