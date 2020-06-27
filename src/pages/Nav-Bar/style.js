import styled from "styled-components";

export const Header = styled.div`
  height: 100px;
  background-color: #202020;
  width: 100%;
`;

export const Nav = styled.div`
  background-color: #333;
  display: flex;
  align-items: center;
  position:absolute;
  transform:translateY(-50%);
  width:1280px;
  a {
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .dropdown {
    position:relative;
    .dropbtn {
      font-size: 16px;
      border: none;
      outline: none;
      color: white;
      padding: 14px 16px;
      background-color: inherit;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: flex;
        text-align: left;

        &:hover {
          background-color: #ddd;
        }
      }
    }
    &:hover .dropdown-content {
      display: block;
    }
  }

  // /* Add a red background color to navbar links on hover */
  // .navbar a:hover,
  // .dropdown:hover .dropbtn {
  //   background-color: red;
  // }


`;
