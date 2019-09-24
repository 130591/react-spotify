import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

// ICONS
import house from "../../imagens/home.svg";
import search from "../../imagens/magnifying-glass.svg";
import library from "../../imagens/book.svg";

export const MenuNav = () => {
  return (
    <ul className="menu__nav">
      <li>
        <img src={house} alt="home" />
        <BrowserRouter>
          <Link to="/">Início</Link>
        </BrowserRouter>
      </li>
      <li>
        <img src={search} alt="Busca" />
        <BrowserRouter>
          <Link to="/search">Buscar</Link>
        </BrowserRouter>
      </li>
      <li>
        <img src={library} alt="biblioteca playlist" />
        <BrowserRouter>
          <Link to="/playlist">Sua Biblioteca </Link>
        </BrowserRouter>
      </li>
    </ul>
  );
};
