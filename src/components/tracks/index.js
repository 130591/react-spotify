import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from 'prop-types';

import { ListTracks } from './listTracks';

const SearchOverview = ({ artist, tracks, audioControl }) => {
  return (
    <div className="searchOverview">
      <div className="searchOverview-media__body">
        <div className="media-object">
          <img src={artist && artist.items ? artist.items[0].images[0].url : ''} alt="capa" />
        </div>
        <h2 className="searchOverview__title">
          {artist && artist.items && artist.items[0].name}
        </h2>
        <p className="searchOverview__title searchOverview--subtitle">
          {artist && artist.items && artist.items[0] && artist.items[0].genres && artist.items[0].genres[1]}
        </p>
      </div>
      <div className="trackContainer">
        <ol className="trackContent">
          {
            tracks && tracks.items && tracks.items.map(track =>
              <ListTracks track={track} artist={artist} audioControl={audioControl} />
            )}
        </ol>
      </div>
    </div>
  );
};

SearchOverview.propTypes = {
  tracks: PropTypes.object,
  artist: PropTypes.object
}

const mapStateToProps = state => ({
  tracks: state.search.referenceTracks,
  artist: state.search.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchOverview);
