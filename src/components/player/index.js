import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import VolumeControls from "./controlVolume";
import SongControl from "./playerSong";
//ACTIONS
import Creators from '../../store/ducks/song';

class Player extends Component {

	state = {
		timeElapsed: this.props.timeElapsed
	};

	componentWillReceiveProps(nextProps) {

		if (!nextProps.songPlaying) {
			clearInterval(this.state.intervalId);
		}

		if (nextProps.songPlaying && nextProps.timeElapsed === 0) {
			clearInterval(this.state.intervalId);
			this.calculateTime();
		}

		this.setState({
			timeElapsed: nextProps.timeElapsed
		});

	}

	calculateTime() {

		const intervalId = setInterval(() => {
			if (this.state.timeElapsed === 30) {
				clearInterval(this.state.intervalId);
				this.props.stopSong();
			} else if (!this.props.songPaused) {
				this.props.increaseSongTime(this.state.timeElapsed + 1);
			}
		}, 1000);

		this.setState({
			intervalId: intervalId
		});

	}

	getSongIndex = () => {
		const { songs, songDetails } = this.props;
		const currentIndex = songs.map((song, index) => {
			if (song.track === songDetails) {
				return index;
			}
		}).filter(item => {
			return item !== undefined;
		})[0];

		return currentIndex;
	}

	nextSong = () => {
		const { songs, audioControl } = this.props;
		let currentIndex = this.getSongIndex();
		currentIndex === songs.length - 1 ? audioControl(songs[0]) : audioControl(songs[currentIndex + 1]);
	}

	prevSong = () => {
		const { songs, audioControl } = this.props;
		let currentIndex = this.getSongIndex();
		currentIndex === 0 ? audioControl(songs[songs.length - 1]) : audioControl(songs[currentIndex - 1]);
	}

	render() {
		const { stop, pause, resume } = this.props
		return (
			<div className="player">
				<SongControl
					songPaused={stop}
					resumeSong={resume}
					pauseSong={pause}
					nextSong={this.nextSong}
					prevSong={this.prevSong}
				/>
				<VolumeControls />
			</div>
		);
	};
}

const mapStateToProps = state => ({
	token: state.token,
	timeElapsed: state.Song.timeElapsed,
	songPaused: state.Song.songPaused,
	songPlaying: state.Song.songPlaying,
	songDetails: state.Song.songDetails,
	songs: state.Song.songs
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...Creators }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Player);
