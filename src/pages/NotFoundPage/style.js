import styled from 'styled-components'

export const Container = styled.div`
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`

export const Title = styled.h1`
  font-size: 50px;
  color: #dc3545;
  margin-bottom: 20px;
  letter-spacing: 1px;
`

export const Subtitle = styled.h4`
  font-size: 20px;
  /* letter-spacing: 1px; */
  color: gray;
  padding-bottom: 20px;
`
export const Redirect = styled.div`
  background: lightgray;
  padding: 10px;
  border-radius: 10px;

  :hover{
    background: #dc3545;
    color: white;
  }
`

export const RedirectBorder = styled.div`
  border-radius: 5px;
`

export const PikachuImage = styled.img`
  width:50%;
`
