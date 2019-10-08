import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import moment from "moment";

const SongControl = (props) => {
  return (
    <div className="song-player-container">
      <div className="song-details">
        <p className="song-name">{props.songName}</p>
        <p className="artist-name">{props.artistName}</p>
      </div>

      <div className="song-controls">
        <div onClick={props.prevSong} className="reverse-song">
          <i className="fa fa-step-backward reverse" aria-hidden="true" />
        </div>
        <div className="play-btn">
          {
            !props.paused === false ?
              <i
                onClick={!props.paused ? props.pauseSong : props.resumeSong}
                className={"fa fa-play fa"}
                aria-hidden="true"
              >
              </i>
              :
              <i
                onClick={!props.paused ? props.pauseSong : props.resumeSong}
                className={"fa fa-pause fa"}
                aria-hidden="true"
              >
              </i>
          }
        </div>
        <div onClick={props.nextSong} className="next-song">
          <i className="fa fa-step-forward forward" aria-hidden="true" />
        </div>
      </div>

      <div className="song-progress-container">
        <p className="timer-start">
          {moment()
            .minutes(0)
            .second(props.timeElapsed)
            .format("m:ss")}
        </p>
        <div className="song-progress">
          <div style={{ width: props.timeElapsed * 16.5 }} className="song-expired" />
        </div>
        <p className="timer-end">
          {moment()
            .minutes(0)
            .second(30 - props.timeElapsed)
            .format("m:ss")}
        </p>
      </div>
    </div>
  );
};

SongControl.propTypes = {
  songPaused: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
  timeElapsed: PropTypes.number,
  playing: PropTypes.bool,
  paused: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    timeElapsed: state.Song.timeElapsed,
    playing: state.Song.songPlaying,
    paused: state.Song.songPaused
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SongControl);
