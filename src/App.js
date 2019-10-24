import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from 'redux';

//COMPONENTS
import Routes from './routes';
import Player from './components/player';
import Creators from './store/ducks/song';
import { request } from './store/ducks/home';

class App extends Component {
	static audio;

	componentWillMount = () => {
		this.props.request();
	}

	componentWillReceiveProps(nextProps) {
		if (this.audio !== undefined) {
			this.audio.volume = nextProps.volume / 100;
		}
	}

	stopSong = () => {
		if (this.audio) {
			this.props.stopSong();
			this.audio.pause();
		}
	}

	pauseSong = () => {
		if (this.audio) {
			this.props.pauseSong();
			this.audio.pause();
		}
	}

	resumeSong = () => {
		if (this.audio) {
			this.props.resumeSong();
			this.audio.play();
		}
	}

	audioControl = (song) => {
		const { playSong, stopSong } = this.props;

		if (this.audio === undefined) {
			playSong(song);
			this.audio = new Audio(song.preview_url);
			this.audio.play();
		} else {
			stopSong();
			this.audio.pause();
			playSong(song.track);
			this.audio = new Audio(song.preview_url);
			this.audio.play();
		}
	}

	render() {
		return (
			<>
				<div id="wrapper">
					<Routes
						audioControl={this.audioControl}
					/>
				</div>
				<Player
					stop={this.stopSong}
					pause={this.pauseSong}
					resume={this.resumeSong}
					audioControl={this.audioControl}
				/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.token,
		volume: state.sound.volume
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ request, ...Creators }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
