import React from "react";

// ICONS
import logo from "../../imagens/Spotify_Logo_RGB_White.png";
import house from "../../imagens/home.svg";
import search from "../../imagens/magnifying-glass.svg";
import library from "../../imagens/book.svg";
import user from "../../imagens/man-user.svg";

export const SideBar = () => (
  <aside className="menu">
    <img src={logo} className="menu__logo" />
    <ul className="menu__nav">
      <li>
        <img src={house} /> Início
      </li>
      <li>
        <img src={search} />
        Buscar
      </li>
      <li>
        <img src={library} />
        Sua Biblioteca
      </li>
    </ul>
    <article className="menu-list">
      <h2>Tocadas recentemente</h2>
      <ul>
        <li>
          Into the Back <span>Album</span>
        </li>
        <li>
          Jonh Coltrane<span>playlist</span>
        </li>
      </ul>
    </article>
    <article className="menu-list">
      <h2>sua biblioteca</h2>
      <ul>
        <li>Músicas</li>
        <li>Albuns</li>
        <li>Artistas</li>
        <li>Estilos</li>
      </ul>
    </article>
    <article className="menu-list">
      <h2>PlayList</h2>
      <ul>
        <li>Viagem</li>
        <li>Academia</li>
        <li>Estudos</li>
        <li>Fim de Noite</li>
      </ul>
    </article>
    <div className="playlist">
      <img src={user} className="nav-icons__user" alt="user" />
      Everton Chagas
    </div>
  </aside>
);
