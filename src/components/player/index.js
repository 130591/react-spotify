import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SpotifyPlayer from 'react-spotify-web-playback';
// import SpotifyWebPlayer from "react-spotify-web-playback";

const Player = props => {
  const [track, setTrack] = useState(false);
  const { token } = props;

  function handleTrack() {
    track === false ? setTrack(true) : setTrack(false);
  }

  return (
    <div className="player">
      {!!token.token ? (
        <SpotifyPlayer
          token={token.token}
          uris={[" spotify: artist: 6HQYnRM4OzToCYPpVBInuU "]}
          styles={{
            bgColor: "#333",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            savedColor: "#fff",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff"
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.token
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
