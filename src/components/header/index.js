import React from "react";

export const Header = () => (
  <header className="header">
    <div className="head">
      <h1>Spotify</h1>
    </div>
    <div className="nav">
      <div className="container">
        <input type="search" className="search" />
        <ul>
          <li>
            <img src="" alt="notificação" />
          </li>
          <li>
            <img src="" alt="user" />
            <span>everton</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
);
