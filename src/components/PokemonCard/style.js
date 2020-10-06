import styled from 'styled-components'


export const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius:5px;
  margin:10px 5px;
  background:white;

  width:200px;
  height:200px;

  padding:10px 0px;

  .pokemon-image {
    width:150px;
  }

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
    font-size: 1.2rem;
    font-weight: bold;
  }
  .pokemon-name a:hover{
      color:coral;
  }
`;

export const Types = styled.div`
  span {
    margin: 0px 8px;
    cursor:pointer;
    font-weight:bold;
  }
`
