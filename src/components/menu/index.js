import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

// ICONS
import logo from "../../imagens/Spotify_Logo_RGB_White.png";
import house from "../../imagens/home.svg";
import search from "../../imagens/magnifying-glass.svg";
import library from "../../imagens/book.svg";
import user from "../../imagens/man-user.svg";

// COMPONENTS
import { MenuList } from "./menu";
// ACTIONS
import Creators from "../../store/ducks/browse";

const SideBar = props => {
  const { recentlyPlayerPending, User, recently, playlist } = props;

  useEffect(() => {
    recentlyPlayerPending();
  }, [recentlyPlayerPending]);

  return (
    <aside className="menu">
      <img src={logo} className="menu__logo" alt="logo" />
      <ul className="menu__nav">
        <li>
          <img src={house} alt="home" />
          <Link to="/callback">Início</Link>
        </li>
        <li>
          <img src={search} alt="Busca" />
          <Link to="/search">Buscar</Link>
        </li>
        <li>
          <img src={library} alt="biblioteca playlist" />
          <Link to="/playlist">Sua Biblioteca </Link>
        </li>
      </ul>
      <article className="menu-list">
        <h2>Tocadas recentemente</h2>
        <ul>
          {recently && recently.items && recently.items.map(r =>
            <li key={r.track.id}>
              {r.track.name} <span> {r.track.artists[0].name}</span>
            </li>
          )}
        </ul>
      </article>
      <article className="menu-list">
        <h2>PlayList</h2>
        <ul>
          {playlist && playlist.items && playlist.items.map(play =>
            <li key={play.id}>{play.name}</li>
          )}
        </ul>
      </article>
      <MenuList />
      <div className="playlist">
        <img src={user} className="nav-icons__user" alt="user" />
        {User.display_name && User.display_name}
      </div>
    </aside>
  );
};

SideBar.propTypes = {
  User: PropTypes.object.isRequired,
  data: PropTypes.object,
  token: PropTypes.object,
  recently: PropTypes.array.isRequired,
  playlist: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  User: state.user.user,
  data: state.browser,
  token: state.token,
  recently: state.browser.recently,
  playlist: state.playlist
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...Creators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
