import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  playlistPending: [],
  playlistError: [],
  playlistSuccess: ["data"],
  createPlaylist: ["id", "name"],
  getPlaylist: ["id"]
});

export const PlaylistTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  // data: [],
});

/* Reducers */
export const PlaylistError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    reprodutionError: true,
    reprodutionPending: false
  };
};

export const PlaylistPending = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    reprodutionError: false,
    reprodutionPending: true
  };
};

export const PlaylistSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...action.data,
    reprodutionError: false,
    reprodutionPending: false
  };
};

/* Reducers to types */

export const playlist = createReducer(INITIAL_STATE, {
  [Types.PLAYLIST_ERROR]: PlaylistError,
  [Types.PLAYLIST_PENDING]: PlaylistPending,
  [Types.PLAYLIST_SUCCESS]: PlaylistSuccess
});
