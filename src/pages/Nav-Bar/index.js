import React from "react";

import { Link } from "react-router-dom";

import { Header, Nav } from "./style";

export default () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Nav>
          <div className="navbar">
            <div className="dropdown">
              <button className="dropbtn">
                Pokedexes
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/kanto">Kanto</Link>
                <Link to="/johto"> Johto </Link>
                <Link to="/Hoen"> Hoen </Link>
                <Link to="/Sinnoh"> Sinnoh </Link>
                <Link to="/Unova"> Unova </Link>
                <Link to="/Kalos"> Kalos </Link>
                <Link to="/Alola"> Alola </Link>
              </div>
            </div>
            <Link to="/"> Home </Link>
            <a href="#">Saiba Mais</a>
          </div>
        </Nav>
      </div>
    </>
  );
};
