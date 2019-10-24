import React, { useEffect } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PropTypes from 'prop-types';

import Theme from '../components/themes';
import Creators from '../store/ducks/albums';
import { ListTracks } from '../components/tracks/listTracks';

const Album = ({ albumDetails, albums, token, match, audioControl }) => {

  useEffect(() => {
    albumDetails(token, match.params.release);
  }, [])

  console.log(albums && albums.tracks && albums)

  return (
    <div className="content">
      <Theme className="album-wrapper" >
        <div className="container">
          <div className="album-info">
            <div className="media-object">
              <img src={albums && albums.images && albums.images[0].url} alt="capa" />
            </div>
            <div className="album-description">
              <h2>{albums && albums.name }</h2>
              <p>{albums && albums.artists && albums.artists[0].name }</p>
              <button className="btn btn--playlist" type="text">play</button>
              <h3>{albums && albums.release_date}.<span> {albums && albums.total_tracks} músicas</span></h3>
            </div>
          </div>
          <div className="trackContainer">
          <ol className="trackContent">
          {
            albums && albums.tracks && albums.tracks.items && albums.tracks.items.map(track => {
              return <ListTracks 
                      audioControl={audioControl} 
                      customStyle={'tracks-single '} 
                      track={track} 
                    />
            })
          }
          </ol>
          </div>
        </div>
      </Theme>
    </div>
  );
}

Album.propTypes = {
  albums: PropTypes.object,
  token: PropTypes.string.isRequired,
  audioControl: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  albums: state.albums.albumDetails,
  token: state.token.token
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Creators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);