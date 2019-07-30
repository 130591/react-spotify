import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { BrowserRouter, Link } from "react-router-dom";

// ICONS
import logo from "../../imagens/Spotify_Logo_RGB_White.png";
import user from "../../imagens/man-user.svg";

// COMPONENTS
import { MenuList } from "./menu";
import { MenuNav } from "./menuNav";
// ACTIONS
import Creators from "../../store/ducks/browse";

const SideBar = props => {
  const { data, recentlyPlayerPending } = props;

  useEffect(() => {
    recentlyPlayerPending();
  }, [recentlyPlayerPending]);

  return (
    <aside className="menu">
      <img src={logo} className="menu__logo" alt="logo" />
      <MenuNav />
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
      <MenuList />
      <div className="playlist">
        <img src={user} className="nav-icons__user" alt="user" />
        Everton Chagas
      </div>
    </aside>
  );
};

const mapStateToProps = state => ({
  user: state.user.user,
  data: state.browser,
  token: state.token
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...Creators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
