import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction:column;
}
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;

  > h1 {
    font-size: 30px;
    display: flex;
    justify-content: center;
    margin: 60px;
    padding: 20px;
    font-weight: bold;
  }

  img {
    width: 100px;
    margin: 10px;
  }
`;
export const Body = styled.div`
  display: flex;
  margin: 10px;
  padding: 20px;
  flex-direction: column;

  p {
    font-size: 20px;
    display: flex;
    justify-content: center;
    padding: 20px;
    margin: 10px;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center;

  font-size: 17px;
  padding: 20px;
  margin: 10px;
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
`;
