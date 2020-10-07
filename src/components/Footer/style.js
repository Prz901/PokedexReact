import styled from 'styled-components'

export const Footer = styled.div`
  width:100%;
  background:#202020;
  margin-top:30px;
`

export const FooterContent = styled.div`
  width: 60%;
  margin: 0px auto;
  padding:20px 0px;
  display:flex;
  align-items:center;
  justify-content:space-between;

  p{
    color:white;
    font-size:14px;
    font-weight:500;
  }
  .footer-privacy {
    cursor:pointer;
  }
  .footer-privacy:hover {
    text-decoration:underline;
  }

`