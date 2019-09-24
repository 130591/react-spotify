import React, { useState, useEffect }  from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";
import Creators from '../../store/ducks/sound';

const VolumeControls = (props) => {
  const [volume, setVolume] = useState(0);

  useEffect(() => setVolume(100), [])

  const updateVolume = e => {
    setVolume(e.target.value)

    props.updateVolume(Math.ceil(e.target.value / 10) * 10);
  };

  return (
      <div className="volume-container">
        <i className="fa fa-volume-up" aria-hidden="true" />
        <input
          className="volume"
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={updateVolume}
        />
      </div>
    );
  }

VolumeControls.propTypes = {
  volume: PropTypes.number,
  updateVolume: PropTypes.func
};

const mapStateToProps = (state) => {  
  return {
    volume: state.sound.volume
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...Creators
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControls);