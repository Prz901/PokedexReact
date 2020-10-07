import styled from "styled-components";

export const Container = styled.div`
    background-color: #727272;
    background-image: repeating-linear-gradient(-45deg, #6a6a6a 0, #6a6a6a 2px, #727272 2px, #727272 11px);
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  background:#202020;
  margin-bottom:30px;

  > h1 {
    font-size: 45px;
    display: flex;
    justify-content: center;
    font-family: 'Press Start 2P', cursive;
    color:white;

    span {
    color:red;
    font-family: 'Press Start 2P', cursive;

    }
  }

  img {
    width:250px;
    height:250px;
  }
`;

export const Body = styled.div`
  width: 60%;
  margin: 0px auto;
  display:flex;
  flex-direction:column;
  background:white;
  border-radius:10px;
`

export const BodyTitle = styled.div`
  display:flex;
  justify-content:center;
  padding: 20px 0px;

  h1 {
    font-size:30px;
    letter-spacing:2px;
    border-bottom: 3px solid lightgray;
    font-weight:700;
  }
`

export const BodyContent = styled.div`
  padding: 0px 40px;

  p {
    font-size: 19px;
    color:#404040;
    font-weight:300;
    padding:40px 0px;
  }

  .titles {
    font-size:25px;
    font-weight:600;
  }
`

export const BodyPokedex = styled.div`
  display:flex;
  width:100%;

`
export const ListOfPokedex = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin-left:100px;
  padding:30px 0px;

  .link {
    font-weight:500;
    color:#2769be;
    padding:10px 5px;
    border:1px solid ;
    width:30%;
    display:flex;
    justify-content:center;
    margin:8px;
    transition:0.9s;
  }
  .h2-link {
    font-weight:500;
    color:black;
    padding:10px 5px;
    width:30%;
    display:flex;
    justify-content:center;
    margin:8px;
    font-size:20px;
  }

  .link:hover{
    background: #ff0000;
    color:white;
    border:1px solid black;
  }

`