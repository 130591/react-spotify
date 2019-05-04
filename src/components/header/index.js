import React from "react";

import notification from "../../imagens/notification.svg";
import user from "../../imagens/man-user.svg";

export const Header = ({ children }) => (
  <>
    <header className="header">
      <div className="head">
        <h1>Spotify</h1>
      </div>
      <div className="nav">
        <div className="container">
          <input type="search" className="search" />
          <ul className="nav-icons">
            <li>
              <img
                src={notification}
                className="nav-icons__notify"
                alt="notificação"
              />
            </li>
            <li>
              <img src={user} className="nav-icons__user" alt="user" />
              <span>everton</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    {children}
  </>
);
