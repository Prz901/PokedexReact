import React from "react";

import { Link } from "react-router-dom";

import {  Nav, NavItem } from "./style";
import Header from "../../components/Header";

export default () => {
  return (
    <>
      <Header />
      <div className="container">
        <Nav>
          <NavItem>
          <div className="dropdown">
            <button className="dropbtn">
              Pokedexes
            </button>
            <div className="dropdown-content">
              <Link to="/national-dex/">National-Dex</Link>
              <Link to="/kanto">Kanto</Link>
              <Link to="/johto"> Johto </Link>
              <Link to="/Hoen"> Hoen </Link>
              <Link to="/Sinnoh"> Sinnoh </Link>
              <Link to="/Unova"> Unova </Link>
              <Link to="/Kalos"> Kalos </Link>
              <Link to="/Alola"> Alola </Link>
              <Link to="/Sword-shield"> Sword e Shield </Link>
            </div>
          </div>
          </NavItem>
          <NavItem ><Link to="/home"> Home </Link></NavItem>
          <NavItem ><a href="https://www.linkedin.com/in/felipe-perozo-costa-122a0a159/">Saiba Mais</a></NavItem>
        </Nav>
      </div>
    </>
  );
};
