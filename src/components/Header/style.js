import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  background:linear-gradient(#3b3b3b, #202020);
  width: 100%;
  height: 180px;

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