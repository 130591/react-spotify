import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { SearchWrapper } from "./searchContent";
import debounce from "lodash.debounce";

import Creators from "../../store/ducks/reprodutions";

const OffSearch = ({ searching, token, reprodutionGet }) => {
  const [isShow, setShow] = useState(false);

  const handleSearching = value => {

    reprodutionGet(token.token, value);

    if (searching.albums) setShow(true);
  };

  const emitChangeDebounced = debounce(handleSearching, 3000);

  return (
    <>
      <input
        type="text"
        className="search"
        onChange={e => emitChangeDebounced(e.target.value)}
        placeholder="Comece a digitar"
      />
      {!isShow ? (
        <>
          <h2 className="search-title">Busque no Spotify</h2>
          <p className="search-description">
            Encontre suas músicas, playlists, artistas, álbuns e podcasts
            favoritos.
          </p>
        </>
      ) : (
        <SearchWrapper data={searching} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  searching: state.search,
  token: state.token,
  tracks: state.search.referenceTracks
});

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OffSearch);
