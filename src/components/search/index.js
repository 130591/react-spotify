import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from 'prop-types';

import debounce from "lodash.debounce";
import SearchWrapper from "./searchContent";
// ACTIONS
import Creators from "../../store/ducks/reprodutions";
import Searching from '../../store/ducks/search';

const OffSearch = ({ albums, token, reprodutionGet, audioControl }) => {
  const [isShow, setShow] = useState(false);

  const handleSearching = value => {

    if (value) reprodutionGet(token.token, value);

    if (albums) setShow(true);

    if (value === '') {
      setShow(false)
    }
  };

  const emitChangeDebounced = debounce(handleSearching, 2000);

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
          <SearchWrapper
            audioControl={audioControl}
          />
        )}
    </>
  );
};

OffSearch.propTypes = {
  album: PropTypes.array,
  token: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  album: state.search.albums,
  token: state.token,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...Creators, ...Searching }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OffSearch);
