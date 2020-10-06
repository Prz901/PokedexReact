import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction:column;
    background-color: #727272;
    background-image: repeating-linear-gradient(-45deg, #6a6a6a 0, #6a6a6a 2px, #727272 2px, #727272 11px);
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  background:#202020;

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
    width: 300px;
    height:300px;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  background:white;
  margin:auto;
  border-radius: 10px;


  p, h2 {
    display: flex;
    justify-content: center;
    padding: 20px;
    margin: 10px;
  }

  p {
    font-size: 18px;

  }
  h2 {
    font-size: 20px;
    font-weight:bold;
    letter-spacing:0.025;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  font-size: 17px;
`;

export const ListOfPokedex = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 400px;

    li{
        display: flex;
        width: 100%;
        margin-bottom: 8px;

    }
    .link{
        width: 100%;
        text-align: center;
        padding: 16px 0;

        background-color: lightgray;
        color: rgb(78, 77, 77);
    }

    .link:hover{
        background-color: lightcoral;
        color: white;
    }
`;
