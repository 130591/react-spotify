import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  stopSong: [""],
  pauseSong: [""],
  resumeSong: [""],
  playSong: ["song"],
  updateViewType: ["view"],
  increaseSongTime: ["time"],
  fetchSongsError: [""],
  searchSongsError: [""],
  fetchSongsPending: [""],
  searchSongsPending: [""],
  fetchRecentlyPlayedError: [""],
  fetchSongsSuccess: ["songs"],
  searchSongsSuccess: ["songs"],
  fetchRecentlyPlayedPending: [""],
  fetchRecentlyPlayedSuccess: ["songs"]
});

export const SongTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  songPlaying: false,
  timeElapsed: 0,
  songId: 0,
  viewType: "songs",
  songPaused: true,
  fetchSongsPending: true
});

/* Reducers */
const UpdateViewType = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    viewType: action.view
  };
};

const FetchSongsPending = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchSongsPending: true
  };
};

const FetchSongsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    songs: action.songs,
    fetchSongsError: false,
    fetchSongsPending: false,
    viewType: "songs"
  };
};

const SearchSongsPending = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    searchSongsPending: true
  };
};

const SearchSongsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    songs: action.songs,
    searchSongsError: false,
    searchSongsPending: false,
    viewType: "search"
  };
};

const SearchSongsError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    searchSongsError: true,
    searchSongsPending: false
  };
};

const FetchRecentlyPlayedPending = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchSongsPending: true
  };
};

const FetchRecentlyPlayedSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    songs: action.songs,
    viewType: "Recently Played",
    fetchSongsError: false,
    fetchSongsPending: false
  };
};

const FetchRecentlyPlayedError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchSongsError: true,
    fetchSongsPending: false
  };
};

const FetchPlaylistSongsPending = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchPlaylistSongsPending: true
  };
};

const FetchPlaylistSongsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    songs: action.songs,
    viewType: "playlist",
    fetchPlaylistSongsError: false,
    fetchPlaylistSongsPending: false
  };
};

const FetchPlaylistSongsError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchPlaylistSongsError: true,
    fetchPlaylistSongsPending: false
  };
};

const FetchArtistSongsPending = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchArtistSongsPending: true
  };
};

const FetchArtistSongsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    songs: action.songs,
    viewType: "Artist",
    fetchArtistSongsError: false,
    fetchArtistSongsPending: false
  };
};

const FetchArtistSongsError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchArtistSongsError: true,
    fetchArtistSongsPending: false
  };
};

const PlaySong = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    songPlaying: true,
    songDetails: action.song,
    songId: action.song.id,
    timeElapsed: 0,
    songPaused: false
  };
};

const StopSong = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    songPlaying: false,
    songDetails: null,
    timeElapsed: 0,
    songPaused: true
  };
};

const PauseSong = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    songPaused: true
  };
};

const ResumeSong = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    songPaused: false
  };
};

const IncreaseSongTime = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    timeElapsed: action.time
  };
};

/* Reducers to types */
export const Song = createReducer(INITIAL_STATE, {
  [Types.STOP_SONG]: StopSong,
  [Types.PAUSE_SONG]: PauseSong,
  [Types.RESUME_SONG]: ResumeSong,
  [Types.PLAY_SONG]: PlaySong,
  [Types.UPDATE_VIEW_TYPE]: UpdateViewType,
  [Types.INCREASE_SONG_TIME]: IncreaseSongTime,
  [Types.FETCH_SONGS_ERROR]: FetchSongsPending,
  [Types.SEARCH_SONGS_ERROR]: SearchSongsError,
  // [Types.FETCH_ARTIST_SONGS_PENDING]: FetchArtistSongsPending,
  [Types.SEARCH_SONGS_PENDING]: SearchSongsPending,
  [Types.FETCH_RECENTLY_PLAYED_ERROR]: FetchRecentlyPlayedError,
  [Types.FETCH_SONGS_SUCCESS]: FetchSongsSuccess,
  [Types.SEARCH_SONGS_SUCCESS]: SearchSongsSuccess,
  [Types.FETCH_RECENTLY_PLAYED_PENDING]: FetchRecentlyPlayedPending,
  [Types.FETCH_RECENTLY_PLAYED_SUCCESS]: FetchRecentlyPlayedSuccess
});
