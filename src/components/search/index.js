import React from "react";

export const OffSearch = ({ hasResult }) => {
  return (
    <>
      <input type="text" className="search" placeholder="Comece a digitar" />
      {!!hasResult ? (
        <>
          <h2 className="search-title">Busque no Spotify</h2>
          <p className="search-description">
            Encontre suas músicas, playlists, artistas, álbuns e podcasts
            favoritos.
          </p>
        </>
      ) : (
        ""
      )}
    </>
  );
};
