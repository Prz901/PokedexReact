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
  width: 67.2%;
  margin: 0px auto;
  display:flex;
  flex-direction:column;
  background:white;
  border-radius:10px;
  margin-top: 50px;
  margin-bottom: 50px;
  min-height: 100vh;
`

export const BodyTitle = styled.div`
  display:flex;
  justify-content:center;
  padding: 20px 0px;

  h1 {
    font-size:30px;
    letter-spacing:2px;
    /* border-bottom: 3px solid lightgray; */
    font-weight:700;
  }
`

export const BodyContent = styled.div`
  padding: 0px 40px;
  height: 100vh;

  p {
    font-size: 16px;
    color:#404040;
    font-weight:300;
    padding:40px 0px;
    letter-spacing: 1px;
    line-height: 1.2;
    width: 95%;
    margin: auto;
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
  align-items:flex-start;
  margin-left:100px;
  padding:30px 0px;

  .link {
    font-weight:500;
    color:#2769be;
    padding:10px 5px;
    width:30%;
    display:flex;
    justify-content:center;
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
    text-decoration: underline;

    color:lightcoral;
  }
`

export const Notification = styled.div`
  width: 98%;
  margin: auto;
  /* background: #D1D0CE; */
  background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
`

export const Content = styled.span`
  display: block;
  height: 12%;
  width: 100%;
  margin-top: 20px;
  padding-top: 4px;
  line-height: 1.6;
  text-align:justify;
`


