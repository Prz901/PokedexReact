import styled from 'styled-components'

export const Container = styled.div`
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  h1 {
    font-size:45px;
    font-weight:bold;
    margin:10px 0px;
    font-family: 'Press Start 2P', cursive;
  }

`

export const Pokebola = styled.div`
  height: 500px;
  width: 500px;
  z-index:0;
  background: gray;
  border:solid 10px black;
  border-radius:50%;
  position:relative;
  z-index:0;

  .rectangle-red {
    width:500px;
    height: 200px;
    background:red;
    border-radius: 250px 250px 0 0  ;
    top: 10%;
    position:absolute;
  }


  .line {
    width: 500px;
    height:20px;
    background:black;
    top:48%;
    bottom: 50%;
    position:absolute;
    z-index:1;
  

  
  }
  .button{
      width:100px;
      height:100px;
      background:white;
      border-radius:50%;
      border:solid 10px black;
      cursor:pointer;
      left:37%;
      top:38%;
      position:absolute;
      z-index:2;
    
      .button-in {
        width:70px;
        height:70px;
        background:white;
        border:solid 5px black;
        position:absolute;
        z-index:2;
        border-radius:50%;
        left:10%;
        top:10%;
      }
      .button-in:hover{
        background:gray;
      }
    }

    .rectangle-white {
      width:500px;
      height: 200px;
      background:white;
      border-radius:0 0 250px 250px;
      position:absolute;
      top:50%;
    }

`
